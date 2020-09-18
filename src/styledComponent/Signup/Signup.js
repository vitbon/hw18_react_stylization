import React, {Component} from "react";
import logotype from "../padlock.svg";
import { Container, Wrapper, Logo, Title, InputBox, CardImg, CheckBox, Label, ButtonStyle,
  AStyle, PStyle, InputNameBox, DivStyle, DivRightStyle } from "../styledComponent.js";

export default class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      checkBox: false,
      prefix: 'styledSignup',
      emailClr: '',
      passClr: '',
      fNameClr: '',
      lNameClr: '',
    };
  }

  componentDidMount = async () => {
    const checkStor = localStorage.getItem(this.state.prefix+'CheckBox');
    if (checkStor) {
      await this.setState({firstName: localStorage.getItem(this.state.prefix+'FirstName')});
      await this.setState({lastName: localStorage.getItem(this.state.prefix+'LastName')});
      await this.setState({email: localStorage.getItem(this.state.prefix+'Email')});
      await this.setState({password: localStorage.getItem(this.state.prefix+'Password')});
      await this.setState({checkBox: checkStor});
    }
  }

  changeSignup = () => {
    localStorage.setItem(this.state.prefix+'FirstName', this.state.firstName);
    localStorage.setItem(this.state.prefix+'LastName', this.state.lastName);
    localStorage.setItem(this.state.prefix+'Email', this.state.email);
    localStorage.setItem(this.state.prefix+'Password', this.state.password);
    localStorage.setItem(this.state.prefix+'CheckBox', this.state.checkBox);
  }

  changeCheckBox = async(e) => { await this.setState({checkBox: e.target.checked}); };
  changeFirstName = async(e) => {
    await this.setState({firstName: e.target.value});
    const fNameRegExp = /[a-zA-Z]{3,}/;
    const checker= this.state.firstName.search(fNameRegExp);
    await this.setState({fNameClr: checker>=0 ? "green"
                                         : checker===-1 ? "red"
                                            : ""
    });
    if (!this.state.firstName) await this.setState({fNameClr: ''});
  };

  changeLastName = async(e) => {
    await this.setState({lastName: e.target.value});
    const lNameRegExp = /[a-zA-Z]{3,}/;
    const checker= this.state.lastName.search(lNameRegExp);
    await this.setState({lNameClr: checker>=0 ? "green"
        : checker===-1 ? "red"
          : ""
    });
    if (!this.state.lastName) await this.setState({lNameClr: ''});
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


  render() {
    return (
      <>
        <Container>
          <Wrapper>
            <Logo>
              <CardImg src={logotype}></CardImg>
            </Logo>
            <Title>
              Sign Up
            </Title>

            <DivStyle>
              <InputNameBox type="text"
                            placeholder="First Name *"
                            value={this.state.firstName}
                            onChange={this.changeFirstName}
                            data={this.state.fNameClr}
              >
              </InputNameBox>
              <InputNameBox type="text"
                            placeholder="Last Name *"
                            value={this.state.lastName}
                            onChange={this.changeLastName}
                            data={this.state.lNameClr}
              >
              </InputNameBox>
            </DivStyle>


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

            <DivStyle>
              <CheckBox type="checkbox"
                        name="check"
                        checked={this.state.checkBox}
                        onChange={this.changeCheckBox}
              >
              </CheckBox>
              <Label for="check">
                I want to receive inspiration, marketing promotions and updates via email.
              </Label>
            </DivStyle>

            <PStyle></PStyle>
            <ButtonStyle onClick={this.changeSignup}>
              SIGN UP
            </ButtonStyle>
            <DivRightStyle>
              <AStyle href="/signin">
                Already have an account? Sign in
              </AStyle>
            </DivRightStyle>
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