import React, {Component} from "react";
import logotype from "../padlock.svg";
import { Container, Wrapper, Logo, Title, InputBox, CardImg, CheckBox, Label,
          ButtonStyle, AStyle, PStyle, DivStyle, DivRightStyle } from "../styledComponent.js";

export default class Signin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      checkBox: false,
      prefixIn: 'styledSignin',
      prefixUp: 'styledSignup',
      emailClr: '',
      passClr: '',
    };
  }

  componentDidMount = async () => {
    const checkStor = localStorage.getItem(this.state.prefixIn+'CheckBox');
    if (checkStor) {
      await this.setState({email: localStorage.getItem(this.state.prefixIn+'Email')});
      await this.setState({password: localStorage.getItem(this.state.prefixIn+'Password')});
      await this.setState({checkBox: checkStor});
    }
  }

  changeSignin = () => {
    const emailIn = this.state.email.toLowerCase();
    const passIn = this.state.password.toLowerCase();
    if (this.state.checkBox) {
      localStorage.setItem(this.state.prefixIn+'Email', this.state.email);
      localStorage.setItem(this.state.prefixIn+'Password', this.state.password);
      localStorage.setItem(this.state.prefixIn+'CheckBox', this.state.checkBox);
    } else {
      localStorage.removeItem(this.state.prefixIn+'Email');
      localStorage.removeItem(this.state.prefixIn+'Password');
      localStorage.removeItem(this.state.prefixIn+'CheckBox');
    }

    if (localStorage.getItem(this.state.prefixUp+'Email').toLowerCase() === emailIn &&
        localStorage.getItem(this.state.prefixUp+'Password').toLowerCase() === passIn) {
      alert ("Sign Up's email address and password totally match. Cool!");
    } else alert ("Sign Up's email address and password don't match");
  }

  changeCheckBox = async(e) => { await this.setState({checkBox: e.target.checked}); };

  changeEmail = async(e) => {
    await this.setState({email: e.target.value});
    const emailRegExp = /(\w{3,})+(@\w{3,})+\.([a-z]{2,})+/i;
    const checker= this.state.email.search(emailRegExp);
    await this.setState({emailClr: checker>=0 ? "green"
        : checker===-1 ? "red"
          : ""
    });
    if (!this.state.email) await this.setState({emailClr: ''});
  };

  changePassword = async(e) => {
    await this.setState({password: e.target.value});
    const passRegExp = /(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}/;
    const checker= this.state.password.search(passRegExp);
    await this.setState({passClr: checker>=0 ? "green"
        : checker===-1 ? "red"
          : ""
    });
    if (!this.state.password) await this.setState({passClr: ''});
  };


  render() {
    return (
      <>
        <Container>
          <Wrapper>
            <Logo>
              <CardImg src={logotype}></CardImg>
            </Logo>
            <Title>
              Sign In
            </Title>
            <InputBox type="email"
                      placeholder="Email Address *"
                      value={this.state.email}
                      onChange={this.changeEmail}
                      data={this.state.emailClr}
            >
            </InputBox>
            <InputBox type="password"
                      placeholder="Password *"
                      value={this.state.password}
                      onChange={this.changePassword}
                      data={this.state.passClr}
            >
            </InputBox>
            <Label>
              <CheckBox type="checkbox"
                        checked={this.state.checkBox}
                        onChange={this.changeCheckBox}
              >
              </CheckBox>
              Remember me
            </Label>
            <PStyle></PStyle>
            <ButtonStyle onClick={this.changeSignin}>
              SIGN IN
            </ButtonStyle>

            <DivStyle>
              <AStyle href="/reset">
                Forgot password?
              </AStyle>
              <AStyle href="/signup">
                Don't have an account? Sign up
              </AStyle>
            </DivStyle>
            <PStyle></PStyle>
            <PStyle></PStyle>
            <PStyle>Copyright © Your Website 2020</PStyle>
            <PStyle></PStyle>
          </Wrapper>
        </Container>
      </>
    );
  }
}