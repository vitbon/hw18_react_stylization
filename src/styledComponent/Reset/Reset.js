import React, {Component} from "react";
import logotype from "../padlock.svg";
import { Container, Wrapper, Logo, Title, InputBox, CardImg, CheckBox, Label, ButtonStyle,
  AStyle, PStyle, InputNameBox, DivStyle, DivRightStyle } from "../styledComponent.js";

export default class Reset extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      prefixUp: 'styledSignup',
      prefixIn: 'styledSignin',
      emailClr: '',
    };
  }

  componentDidMount = async () => {
    const checkStor = localStorage.getItem(this.state.prefix+'CheckBox');
    if (checkStor) {
      await this.setState({email: localStorage.getItem(this.state.prefix+'Email')});
      await this.setState({password: localStorage.getItem(this.state.prefix+'Password')});
      await this.setState({checkBox: checkStor});
    }
  }

  changeReset = () => {
    if (localStorage.getItem(this.state.prefixUp+'Email').toLowerCase() === this.state.email.toLowerCase()) {
      localStorage.removeItem(this.state.prefixUp + 'Password');
    }
    if (localStorage.getItem(this.state.prefixIn+'Email').toLowerCase() === this.state.email.toLowerCase()) {
      localStorage.removeItem(this.state.prefixIn + 'Password');
    }
  }

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
              Reset password
            </Title>

            <InputBox type="email"
                      placeholder="Email Address *"
                      value={this.state.email}
                      onChange={this.changeEmail}
                      data={this.state.emailClr}
            >
            </InputBox>

            <ButtonStyle onClick={this.changeReset}>
              RESET PASSWORD
            </ButtonStyle>

            <DivStyle>
              <AStyle href="/signin">
                Already have an account? <br/>Sign in
              </AStyle>
              <AStyle href="/signup">
                Dont't have an account? <br/>Sign up
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