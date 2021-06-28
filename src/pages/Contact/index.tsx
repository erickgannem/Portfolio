import React from 'react'
import styled from 'styled-components'
import { IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'

import Container from 'components/Container'

import guidelines from 'guidelines'

const { colors } = guidelines
// will be separated

const _FollowMe = styled.div``
const _GithubIcon = styled(IoLogoGithub)``
const _LinkedinIcon = styled(IoLogoLinkedin)``
const _InstagramIcon = styled(IoLogoInstagram)``

const _SocialNetworks = styled.div`
`
const _SocialNetwork = styled.div`
  display: flex;
  align-items: center;
`
const _SocialLink = styled.a`
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
const _FieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const _ContactForm = styled.form`
  background: ${colors.paleGrey2};
  padding: 1.5rem;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const _TextField = styled.input`
  padding: 1rem;
  border: none;
  border-radius: 5px;
  background: ${colors.paleGrey1};

  @media(max-width: 899px) {
    width: 100%;
  }
`
const _TextArea = styled.textarea`
  padding: 1rem;
  border: none;
  border-radius: 5px;
  background: ${colors.paleGrey1};
  resize: none;
  font-family: 'Open Sans';
  margin-bottom: 1rem;

  @media(max-width: 899px) {
    width: 100%;
  }

`
const _SubmitButton = styled.button`
  padding: 1rem;
  border: none;
  border-radius: 5px;
  background-color: ${colors.azul};
  color: ${colors.white};
`
// will be separated

export default function Contact () {
  return (
    <Container
      padding='2rem 1rem'
    >
      <_FollowMe>
        <p>Muito obrigado por ter visitado meu site. Me segue nas redes:</p>
        <_SocialNetworks>
          <_SocialNetwork>
            <_LinkedinIcon size='2rem'/>
            <_SocialLink href="https://www.linkedin.com/in/erick-gannem-471840208/" target='_blank' rel="noreferrer">LinkedIn</_SocialLink>
          </_SocialNetwork>
          <_SocialNetwork>
            <_InstagramIcon size='2rem'/>
            <_SocialLink href='https://www.instagram.com/erickgannem/' target='_blank' rel="noreferrer">Instagram</_SocialLink>
          </_SocialNetwork>
          <_SocialNetwork>
            <_GithubIcon size='2rem'/>
            <_SocialLink href='https://www.github.com/erickgannem/' target='_blank' rel="noreferrer">Github</_SocialLink>
          </_SocialNetwork>
        </_SocialNetworks>
      </_FollowMe>
      <_ContactForm>
        <h2 style={{ marginBottom: '1rem', textAlign: 'center' }}>Me envie uma mensagem :)</h2>
        <_FieldsWrapper>
          <_TextField type='text' placeholder='seu nome'/>
          <_TextField style={{ margin: '1rem 0' }} type='text' placeholder='Seu e-mail'/>
          <_TextArea placeholder='Sua mensagem'/>
        </_FieldsWrapper>
        <_SubmitButton>
          Enviar
        </_SubmitButton>
      </_ContactForm>
    </Container>
  )
}
