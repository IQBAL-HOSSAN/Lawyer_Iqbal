import React from "react";
import { Accordion, Container } from "react-bootstrap";

const Blog = () => {
  return (
    <div id="blog-page" className="py-5">
      <h2 className="text-center mb-4">My Blogs</h2>
      <div className="d-flex justify-content-center mb-5 ">
        <div className=" under-line bg-danger"></div>
      </div>
      <Container>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              What is the difference between authentication and authorization?
            </Accordion.Header>
            <Accordion.Body>
              <div className="d-md-flex d-lg-flex gap-4">
                <div>
                  <h4>Authentication </h4>
                  <ol>
                    <li>
                      In authentication process, the identity of users are
                      checked for providing the access to the system.{" "}
                    </li>
                    <li>
                      In authentication process, users or persons are verified.{" "}
                    </li>
                    <li>It is done before the authorization process. </li>
                    <li>It needs usually user’s login details. </li>
                  </ol>
                </div>
                <div>
                  <h4>Authorization</h4>
                  <ol>
                    <li>
                      While in authorization process, person’s or user’s
                      authorities are checked for accessing the resources.
                    </li>
                    <li>
                      While in this process, users or persons are validated.
                    </li>
                    <li>
                      While this process is done after the authentication
                      process.
                    </li>
                    <li>While it needs user’s privilege or security levels.</li>
                  </ol>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              Why are you using firebase? What other options do you have to
              implement authentication?
            </Accordion.Header>
            <Accordion.Body>
              <div className="d-md-flex d-lg-flex gap-4">
                <div>
                  <h3>I use fire for following!</h3>
                  <ol>
                    <li>
                      Firebase manages all data real-time in the database. So,
                      the exchange of data to and fro from the database is easy
                      and quick. Hence, if you are looking to develop mobile
                      apps such as live streaming, chat messaging, etc., you can
                      use Firebase.
                    </li>
                    <li>
                      Firebase allow syncing the real-time data across all the
                      devices- Android, iOS, and the web without refreshing the
                      screen
                    </li>
                    <li>
                      Firebase offers integration to Google Ads, AdMob,
                      DoubleClick, Play Store, Data Studio, BigQuery, and Slack,
                      to make your app development with efficient and accurate
                      management and maintenance
                    </li>
                    <li>
                      Everything from databases, analytics to crashing reports
                      are included in Firebase. So, the app development teams
                      can stay focused on improving the user experience
                    </li>
                  </ol>
                </div>
                <div>
                  <h4>There are 10 platforms list to user authentication.</h4>

                  <ol>
                    <li>Firebase</li>
                    <li>Stytch</li>
                    <li>Ory</li>
                    <li>Supabase</li>
                    <li>Okta</li>
                    <li>PingIdentity</li>
                    <li>Keycloak</li>
                    <li>Frontegg</li>
                    <li>Authress</li>
                    <li>Auth0</li>
                  </ol>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              What other services does firebase provide other than
              authentication?
            </Accordion.Header>
            <Accordion.Body>
              <div>
                <h3>
                  Firebase provides lot of services other then authentication.
                  like:
                </h3>
                <ol>
                  <li>Real time database</li>
                  <li>Real config</li>
                  <li>Cloud Function</li>
                  <li> Cloud messanging</li>
                  <li>Hosting</li>
                  <li>Cloud store</li>
                  And so on...
                </ol>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  );
};

export default Blog;
