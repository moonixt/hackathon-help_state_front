import React from 'react'
import { Button, Checkbox, Label, TextInput } from "flowbite-react";

const LoginPage = () => {
  return (
    <div className='pt-40'>
        <form className="flex flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Insira seu e-mail" />
        </div>
        <TextInput id="email1" type="email" placeholder="nome@provedor.com" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1" value="Sua senha" />
        </div>
        <TextInput id="password1" type="password" required />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">Remember me</Label>
      </div>
      <Button type="submit">Enviar</Button>
      <Button>Criar uma nova conta</Button>
    </form>
    
      
    </div>
  )
}

export default LoginPage
