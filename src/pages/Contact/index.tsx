import React from 'react'
import styled from 'styled-components'
import { IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'

import guidelines from 'guidelines'
import NavbarMenuContext from 'context/NavbarMenuContext'

const { colors } = guidelines
// will be separated

const _FollowMe = styled.div`
  @media (min-width: 0) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
  }
`
const _GithubIcon = styled(IoLogoGithub)`
  color: ${colors.darkBlueGreen90};
`
const _LinkedinIcon = styled(IoLogoLinkedin)`
  color: ${colors.darkBlueGreen90};
`
const _InstagramIcon = styled(IoLogoInstagram)`
  color: ${colors.darkBlueGreen90};
`
const _SocialNetworks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const _SocialNetwork = styled.a`
  background: ${colors.paleGrey2};
  border: 1px solid ${colors.coolGrey2};
  @media (min-width: 0) {
    display: flex;
    align-items: center;
    padding: 1rem;
    border-radius: 100%;
    ${this}:nth-child(2) {
      margin: 0 1rem;
    }
  }
`
const _FieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const _ContactForm = styled.form`
  background: ${colors.paleGrey2};
  border: 1px solid ${colors.coolGrey3};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 0) {
    padding: 1.5rem;
    width: 100%;    
  }
  @media (min-width: 500px) {
    width: 75%;
  }
  @media (min-width: 700px) {
    width: 50%;
  }
  @media (min-width: 1000px) {
    width: 40%;
  }
`
const _TextField = styled.input`
  padding: 1rem;
  border: none;
  border-radius: 5px;
  background: ${colors.paleGrey1};
  outline: none;

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
  outline: none;

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
  width: 6rem;
  margin: 0 auto;

  ${this}:hover {
    cursor: pointer;
  }
`
const _Container = styled.div`
  @media (min-width: 0) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
  }
`
// will be separated

export default function Contact () {
  const { setIsOpen } = React.useContext(NavbarMenuContext)
  React.useEffect(() => {
    setIsOpen(false)
  }, [])
  return (
    <_Container>
      <_ContactForm>
        <_FieldsWrapper>
          <_TextField type='text' placeholder='Seu nome'/>
          <_TextField style={{ margin: '1rem 0' }} type='text' placeholder='Seu e-mail'/>
          <_TextArea placeholder='Sua mensagem'/>
        </_FieldsWrapper>
        <_SubmitButton>
          Enviar
        </_SubmitButton>
      </_ContactForm>
      <_FollowMe>
        <_SocialNetworks>
          <_SocialNetwork
            href='https://www.linkedin.com/in/erick-gannem-471840208/'
            target='_blank'
          >
            <_LinkedinIcon size='2rem'/>
          </_SocialNetwork>
          <_SocialNetwork
            href='https://www.instagram.com/erickgannem/'
            target='_blank'
          >
            <_InstagramIcon size='2rem'/>
          </_SocialNetwork>
          <_SocialNetwork
            href='https://www.github.com/erickgannem/'
            target='_blank'
          >
            <_GithubIcon size='2rem'/>
          </_SocialNetwork>
        </_SocialNetworks>
      </_FollowMe>
    </_Container>
  )
}
