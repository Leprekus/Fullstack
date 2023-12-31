import React, { useState } from 'react'
//import user from '../../mock/user.json'
import Layout from '../Layout';
import FormContent from './sections/FormContent';
import { useAuth } from '../hooks/useAuth';
import { NewAccount } from '../../typings';

export default function CreateAccount() {
    const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImg, setSelectedImg] = useState<string | ArrayBuffer | null>('')
  const [formData, setFormData] = useState<NewAccount>({
    email: '',
    name: '',
    password: '',
    username: '',
    bio: '',
    profileImage:  selectedImg as string || '',
    id: ''
  });

  






  const totalPages = 2;
  const { signIn } = useAuth()

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      return
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleFormChange = (fieldName: string, value: string) => {
    console.log({ fieldName, value})
    setFormData(prevData => ({ ...prevData, [fieldName]: value }));
  };

  const handleSubmit = async (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    
    if (currentPage === totalPages) {
      //TODO:Handle form submission
      
      try {
        setIsLoading(true)
        setFormData((prev) => ({
          ...prev,
          profileImage: selectedImg as string
        }))
        const credentials = btoa(`${import.meta.env.VITE_CLIENT_ID}:${import.meta.env.VITE_CLIENT_SECRET}`)
        const res = await fetch(`${import.meta.env['VITE_BACKEND_URL']}api/POST/create-account`, {
          method: 'POST',
          headers:{ 
            'Content-Type': 'application/json',
            'Authorization': `${credentials}`
          },
          body: JSON.stringify(formData)
        })

        if(res.ok)
          signIn(formData.username, formData.password as string)
       
      } catch(error) {
        console.log(error)
      } finally{
        setIsLoading(false)
      }
    } 
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(event?.target?.files) {
      
      const [ file ] = event.target.files
    
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImg(reader.result);
      };
      reader.readAsDataURL(file);

    } 
  }
  return (
    <Layout>
      <FormContent
        currentPage={currentPage}
        formData={formData}
        selectedImg={selectedImg}
        handleFormChange={handleFormChange}
        handleImageChange={handleImageChange}
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
      />
    </Layout>
  );
}
