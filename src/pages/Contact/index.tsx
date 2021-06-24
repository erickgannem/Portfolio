import React from 'react'
import styled from 'styled-components'
import { IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'

import Container from 'components/Container'

import guidelines from 'guidelines'

const { colors } = guidelines
// will be separated

const FollowMe = styled.div``
const GithubIcon = styled(IoLogoGithub)``
const LinkedinIcon = styled(IoLogoLinkedin)``
const InstagramIcon = styled(IoLogoInstagram)`
  @media(max-width: 899px) {
    margin: 0.5rem 0;
  }
`

const SocialNetworks = styled.div`
  margin: 1rem 0;
`
const SocialNetwork = styled.div`
  display: flex;
  align-items: center;
`
const SocialLink = styled.a`
  text-decoration: none;
  color: ${colors.darkBlueGreen};
  font-weight: bold;

  ${this}:hover {
    cursor: pointer;
    color: ${colors.darkBlueGreen90}
  }

  @media(max-width: 899px){
    margin-left: 0.2rem;
  }
`
const FieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const ContactForm = styled.form`
  background: ${colors.coolGrey};
  padding: 1.5rem;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const TextField = styled.input`
  padding: 1rem;
  border: none;
  border-radius: 5px;
  background: ${colors.paleGrey2};

  @media(max-width: 899px) {
    width: 100%;
  }
`
const TextArea = styled.textarea`
  padding: 1rem;
  border: none;
  border-radius: 5px;
  background: ${colors.paleGrey2};
  resize: none;
  font-family: 'Open Sans';
  margin-bottom: 1rem;

  @media(max-width: 899px) {
    width: 100%;
  }

`
// will be separated

export default function Contact () {
  return (
    <Container
      padding='2rem 1rem'
    >
      <FollowMe>
        <p>Muito obrigado por ter visitado meu site. Me segue nas redes:</p>
        <SocialNetworks>
          <SocialNetwork>
            <LinkedinIcon size='2rem'/>
            <SocialLink href="https://www.linkedin.com/in/erick-gannem-471840208/" target='_blank' rel="noreferrer">LinkedIn</SocialLink>
          </SocialNetwork>
          <SocialNetwork>
            <InstagramIcon size='2rem'/>
            <SocialLink href='https://www.instagram.com/erickgannem/' target='_blank' rel="noreferrer">Instagram</SocialLink>
          </SocialNetwork>
          <SocialNetwork>
            <GithubIcon size='2rem'/>
            <SocialLink href='https://www.github.com/erickgannem/' target='_blank' rel="noreferrer">Github</SocialLink>
          </SocialNetwork>
        </SocialNetworks>
      </FollowMe>
      <ContactForm>
        <h2 style={{ marginBottom: '1rem', textAlign: 'center' }}>Me envie uma mensagem :)</h2>
        <FieldsWrapper>
          <TextField type='text' placeholder='seu nome'/>
          <TextField style={{ margin: '1rem 0' }} type='text' placeholder='Seu e-mail'/>
          <TextArea placeholder='Sua mensagem'/>
        </FieldsWrapper>
        {/* <Button /> */}
      </ContactForm>
    </Container>
  )
}
