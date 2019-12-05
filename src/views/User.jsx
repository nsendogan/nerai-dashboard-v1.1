/*!

=========================================================
* Paper Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState, useEffect } from 'react';
import { subscribeToTweet } from '../api';
import alertTweets from '../variables/alertTweets.js';

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,

  CardTitle,
  FormGroup,

  Input,
  Row,
  Col,

  Popover,
  PopoverHeader,
  PopoverBody,
} from 'reactstrap';
import Select from 'react-select';

let scroolTabStyle = {
  height: '100vh',
  overflow: 'scroll',
};
const countries = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Anguilla',
  'Antigua &amp; Barbuda',
  'Argentina',
  'Armenia',
  'Aruba',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bermuda',
  'Bhutan',
  'Bolivia',
  'Bosnia &amp; Herzegovina',
  'Botswana',
  'Brazil',
  'British Virgin Islands',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Cayman Islands',
  'Chad',
  'Chile',
  'China',
  'Colombia',
  'Congo',
  'Cook Islands',
  'Costa Rica',
  'Cote D Ivoire',
  'Croatia',
  'Cruise Ship',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Estonia',
  'Ethiopia',
  'Falkland Islands',
  'Faroe Islands',
  'Fiji',
  'Finland',
  'France',
  'French Polynesia',
  'French West Indies',
  'Gabon',
  'Gambia',
  'Georgia',
  'Germany',
  'Ghana',
  'Gibraltar',
  'Greece',
  'Greenland',
  'Grenada',
  'Guam',
  'Guatemala',
  'Guernsey',
  'Guinea',
  'Guinea Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hong Kong',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Isle of Man',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jersey',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kuwait',
  'Kyrgyz Republic',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macau',
  'Macedonia',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Montenegro',
  'Montserrat',
  'Morocco',
  'Mozambique',
  'Namibia',
  'Nepal',
  'Netherlands',
  'Netherlands Antilles',
  'New Caledonia',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Norway',
  'Oman',
  'Pakistan',
  'Palestine',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Puerto Rico',
  'Qatar',
  'Reunion',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Pierre &amp; Miquelon',
  'Samoa',
  'San Marino',
  'Satellite',
  'Saudi Arabia',
  'Senegal',
  'Serbia',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'South Africa',
  'South Korea',
  'Spain',
  'Sri Lanka',
  'St Kitts &amp; Nevis',
  'St Lucia',
  'St Vincent',
  'St. Lucia',
  'Sudan',
  'Suriname',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  "Timor L'Este",
  'Togo',
  'Tonga',
  'Trinidad &amp; Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Turks &amp; Caicos',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'United States Minor Outlying Islands',
  'Uruguay',
  'Uzbekistan',
  'Venezuela',
  'Vietnam',
  'Virgin Islands (US)',
  'Yemen',
  'Zambia',
  'Zimbabwe',
]; // { value: 'albenia', label: 'Albenia' },
const countryOptions = [{ value: 'ALL', label: 'ALL' }];
countries.map(country => countryOptions.push({ value: country, label: country }));
const topics = ['Politics', 'Economy', 'Instability', 'Nuclear', 'Money', 'NeuroScience']; // { value: 'politics', label: 'Politics' },
const topicOptions = [{ value: 'ALL', label: 'ALL' }];
topics.map(topic => topicOptions.push({ value: topic, label: topic }));
let tweetArray = [];

const PopoverItem = props => {
  const [popoverOpen, setPopoverOpen] = useState(false);

  const toggle = () => setPopoverOpen(!popoverOpen);

  return (
    <span>
      <Button className="mr-1" color="secondary" id={props.name} type="button">
        {props.name}
      </Button>
      <Popover placement={'right'} isOpen={popoverOpen} target={props.name} toggle={toggle}>
        <PopoverHeader>{props.name}</PopoverHeader>
        <PopoverBody>{props.text}</PopoverBody>
      </Popover>
    </span>
  );
};

const Tweet = props => {
  return (
    <li>
      <Row>
        <Col md="2" xs="2">
          <div className="avatar">
            <img alt="..." className="img-circle img-no-padding img-responsive" src={props.img} />
          </div>
        </Col>
        <Col md="7" xs="7">
          {props.userName} <br />
          <span className="text-muted">
            <small style={{ overflow: 'scroll', height: '15vh' }}>{props.text}</small>
          </span>
        </Col>
        <Col className="text-right" md="3" xs="3">
          <Button className="btn-round btn-icon" color="success" outline size="sm">
            <i className="nc-icon nc-minimal-right" />
          </Button>
        </Col>
      </Row>
    </li>
  );
};

const GDELTSummary = ({ search }) => {
  let [res, setRes] = useState({});
  useEffect(() => {
    if (search) {
      fetch(
        `https://api.gdeltproject.org/api/v2/doc/doc?format=html&timespan=FULL&query=${search}&mode=artlist&maxrecords=75&format=json&sort=hybridrel`,
      )
        .then(res => res.json())
        .then(result => {
          setRes(result.articles);
          return;
        })
        .catch(err => console.log(err));
    }
  }, [search, res]);

  return (
    <Card>
      <CardHeader>
        <CardTitle tag="h4">LATEST ALERTS</CardTitle>
      </CardHeader>
      <CardBody>
        <div style={{ height: '100vh', overflow: 'scroll' }}>
          {Object.keys(res).map((key, index) => {
            return (
              <a href={res[key].url}>
                {' '}
                <p>{res[key].title}</p>
                <img alt="" src={res[key].socialimage}></img>
              </a>
            );
          })}
        </div>
      </CardBody>
    </Card>
  );
};

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'dummy text',
      img: '',
      userName: 'dummy username',
    };
    subscribeToTweet((err, tweet) =>
      this.setState({
        text: tweet.text,
        userName: tweet.user.name,
        img: tweet.user.profile_image_url_https,
      }),
    );
  }

  render() {
    return (
      <>
        <div className="content">
          <Row lg="12">
            <Col lg="1"></Col>
            <Col>
              <Select options={countryOptions} isMulti placeholder="Select Country" isSearchable />
            </Col>
            <Col>
              <div
                style={{
                  borderColor: 'rgb(204,204,204)',
                  borderStyle: 'solid',
                  borderRadius: '5px',
                  borderWidth: '1px',
                  backgroundColor: 'white',
                  height: '100%',
                  paddingTop: '6px',
                }}
              >
                <Row style={{ marginLeft: '2vw' }}>
                  <Col lg="auto">
                    <FormGroup style={{ color: 'rgb(128,128,128)' }}>
                      <Input type="checkbox" /> Daily
                    </FormGroup>
                  </Col>
                  <Col lg="auto">
                    <FormGroup style={{ color: 'rgb(128,128,128)' }}>
                      <Input type="checkbox" defaultChecked /> Weekly
                    </FormGroup>
                  </Col>
                  <Col lg="auto">
                    <FormGroup style={{ color: 'rgb(128,128,128)' }}>
                      <Input type="checkbox" /> Monthly
                    </FormGroup>
                  </Col>
                </Row>
              </div>
            </Col>

            <Col>
              <Select options={topicOptions} isMulti placeholder="Select Topic" isSearchable />
            </Col>
            <Col lg="1"></Col>
          </Row>
          <br />
          <Row>
            <Col md="4">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">REALTIME NEWS</CardTitle>
                </CardHeader>
                <CardBody>
                  <div style={scroolTabStyle}>
                    <ul className="list-unstyled team-members">
                      <Tweet
                        text={this.state.text}
                        img={this.state.img}
                        userName={this.state.userName}
                      />
                      {tweetArray.map(item => item)}
                      {tweetArray.unshift(
                        <Tweet
                          text={this.state.text}
                          img={this.state.img}
                          userName={this.state.userName}
                        />,
                      )}
                    </ul>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <GDELTSummary search={'Donald%20Trump'} />
            </Col>
            <Col md="4">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">CUSTOM NEWS</CardTitle>
                </CardHeader>
                <CardBody>
                  <div style={scroolTabStyle}>
                    <ul className="list-unstyled team-members">
                      {alertTweets.map((tweet, key) => (
                        <Tweet text={tweet.text} img={tweet.img} userName={tweet.userName} />
                      ))}
                    </ul>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <PopoverItem
              name={'Background'}
              text={
                'The real time information model benefits from social media and all kinds of news streams which are from more than 100 data sources and 250 international and regional newsfeeds. With regard to the social media, the system feeds by pre-selected accounts and influencers tweets that include breaking news. The ML model translates 65 languages continuously and presents a comprehensive real-time alert system. The model also offers unique filter capability to reach what is really important for the users.'
              }
            />
          </Row>
        </div>
      </>
    );
  }
}

export default User;
