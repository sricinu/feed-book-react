import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

import SlackLogin from 'react-native-slack-login'
<View>
    <TouchableOpacity onPress={()=> this.slackLogin.show()}>
        <Text style={{color: 'white'}}>Login</Text>
    </TouchableOpacity>
    <SlackLogin
          ref={ref => this.slackLogin = ref}
          clientId='your client id'
          clientSecret='your client secret'
          redirectUrl='your redirect url'
          scopes={['chat:write:user', 'channels:read']}
          onLoginSuccess={(token) => this.setState({ token })}
          onLoginFailure={(data) => this.setState({ failure: data })}
        />
</View>

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
         <a href="https://slack.com/oauth/authorize?scope=identity.basic&client_id=1060891423907.1061462914403"><img src="https://api.slack.com/img/sign_in_with_slack.png" /></a>
      </div>
     
    );
  }
}

render(<App />, document.getElementById('root'));
