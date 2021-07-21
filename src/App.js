import {Amplify} from 'aws-amplify'
import config from './aws-exports'
import {withAuthenticator,AmplifySignOut} from '@aws-amplify/ui-react'
import './App.css';

Amplify.configure(config)
function App() {
  return (
    <div className="App">
     <AmplifySignOut />
     <h1>Hello</h1>
    </div>
  );
}

export default withAuthenticator(App);
