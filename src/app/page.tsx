import Button from "@/Components/Button/button";
import Form from "@/Components/Form/form";
import InputField from "@/Components/InputField";

export default function App (){
  return(
    <>
    <Form title="Login">
    <InputField label = "Username"/>
    <InputField label = "password" type="password"/>
    <Button/>

    </Form>
    </>
  )
  }