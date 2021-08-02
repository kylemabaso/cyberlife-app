import React, { useState, useCallback, useRef } from "react"
// import {  useHistory } from "react-router-dom"
import Header from '../components/ui/Header';
import { Cbuilder } from "../components/cbuilder/Cbuilder";
import { Button } from "../components/cbuilder/Button";
import { useForm, Controller } from "react-hook-form";
import TouserIcon from "../components/cbuilder/TouserIcon";
import { TwitterPicker } from "react-color";
import { ReactDatez } from "react-datez";
import { toPng } from 'html-to-image';

import developer from '../images/developer.png'
import chef from '../images/chef.png'
import socialMedia from '../images/social-media.png'
import yoga from '../images/yoga.png'
import fHead from '../images/f-head.png'
import mHead from '../images/m-head.png'
import foHead from '../images/old-f-head.png'
import moHead from '../images/old-m-head.png'
import logo from '../images/logo.svg'



export default function Dashboard() {
  // const [ error, setError ] = useState("");
  // const history = useHistory();
  const [color, setColor] = useState('#ffffff');
  const [setGender] = useState('');
  const [currentStep, setCurrentStep ] = useState(0);
  const [age, setAge] = useState([]);
  const [date, setDate] = useState('');
 

  const {watch, register, formState, handleSubmit, control
  } = useForm( {mode: "all" });
  const { errors, isValid } = formState;



  const maxSteps = 2;


  const handleGender=(e)=>{
    setGender(e.target.value);    
 }


  const completedFormStep = () => {
    setCurrentStep( current => current + 1)
  }

  const prevStep= () => {
    setCurrentStep( current => current - 1)
  }
  

  const getAge = (event) => {
    const today = new Date();
    const birthDay = new Date(event);
    const newAge = today.getFullYear() - birthDay.getFullYear();


    birthDay.toLocaleDateString();
    let formatted_date =  birthDay.getFullYear()  + "/" +  (birthDay.getMonth() + 1) + "/" + birthDay.getDate()  
    
    // if(age < 18 ) {
    //   alert('You must be 18 and above. ')
    // }
    
    setAge(newAge);
    setDate(formatted_date);

    
    
  }

  const entries = watch();

  const values = {
    name: entries.name,
    surname: entries.surname,
    age: {age}.age,
    gender: entries.gender,
    occupation: entries.occupation,
    color: {color}.color
  }



//   async function handleSubmit(e) {
//     e.preventDefault();

//     try {
//         setError(''); // Reset error to blank
//         setLoading(true); // This will disable sign up button while the sign up is in progress
//         const res = await logIn(emailRef.current.value, passwordRef.current.value);
//         console.log(111, res)
//         history.push("/");
//     } catch {
//         setError('Failed to sign in')
//     }

//     setLoading(false); // Re-enable sign up button
// }



  // const SaveCharacter = ({ character }) => {
  //   const { name, surname } = character

  //   useEffect(() => {
  //     firebase.firestore().collection('character').doc().set({
  //        firstName: name, 
  //        lastName: surname
  //       }).then (( characterData ) => 
  //       console.log(characterData)
  //       ).catch(( error ) =>
  //       console.error(error)
  //       )
  //   }, [])
  // }

  // console.log(JSON.stringify(values));


  const SaveCharacter = () => {
   
    // firebase.firestore().collection('character').doc().set({
    //   name: entries.name, 
    //   surname: entries.surname
    // }).then (( characterData ) => 
    // console.log('successfully')
    // ).catch(( error ) =>
    // console.error(error)
    // )


    
  console.log(JSON.stringify(values));
   
  
  }

  // Image Generation
  // const ref = useRef<HTMLDivElement>(null)

  // const onButtonClick = useCallback(() => {
  //   if (ref.current === null) {
  //     return
  //   }

  //   toPng(ref.current, { cacheBust: true, })
  //     .then((dataUrl) => {
  //       const link = document.createElement('a')
  //       link.download = 'my-cyber-character.png'
  //       link.href = dataUrl
  //       link.click()
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // }, [ref])


  return (
    <div className="h-full bg-gradient-to-t from-cyan-400  to-cyan-800">

      <Header />
   
        {/* {error && { error }} */}

      <section className="lg:px-16 flex-auto">
      <div className="flex flex-wrap -mx-1 overflow-hidden sm:-mx-1 md:-mx-1 lg:-mx-1 xl:-mx-1">
              <div className="my-1 px-1 w-full overflow-hidden sm:my-1 sm:px-1 md:my-1 md:px-1 lg:my-1 lg:px-1 lg:w-1/3 xl:my-1 xl:px-1 xl:w-1/3 form-border">
                          <Cbuilder onSubmit={handleSubmit(SaveCharacter)} className="w-full max-w-lg">
                        

                        
                        {currentStep < maxSteps && (
                          <div className='flex-auto'>
                            <div className="title">       
                              &raquo; Step {currentStep + 1} of {maxSteps}
                            </div>
                          </div>
                        )}
                      
                        <div>
                        {currentStep >= 0 && (
                          <div className= {currentStep === 0 ? 'block' : 'hidden'}>
                            <div className="w-full px-3 mb-6 md:mb-0"> 
                                  <label className="block capitalize tracking-wide mb-2" htmlFor="grid-first-name">
                                    Name
                                  </label>
                                <input
                                  className="appearance-none block w-full rounded bg-gray-200 text-gray-700 border border-gray-500 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                  id="name"
                                  type="text"
                                  placeholder="Name"
                                  name="name"
                                  {...register('name',  {
                                    required: true
                                  })}
                                />

                                <small className="error-message">{errors.name?.type === 'required' && "Name is required"} </small>
                            </div>

                            <div className="w-full px-3 mb-6 md:mb-0"> 
                                  <label className="block capitalize tracking-wide mb-2" htmlFor="grid-first-name">
                                    Surname
                                  </label>

                                <input
                                  className="appearance-none block w-full rounded bg-gray-200 text-gray-700 border border-gray-500 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                  id="surname"
                                  type="text"
                                  placeholder="Surname"
                                  name="surname"
                                  {...register('surname',  {
                                    required: true
                                  })}
                                  
                                />

                                <small className="error-message">{errors.surname?.type === 'required' && "Surname is required"} </small>
                            </div>
                          </div>
                        )}

                        {currentStep === 1 && (
                          <div className= {currentStep === 1 ? 'block' : 'hidden'}>
                              <div className="w-full px-3 mb-6 md:mb-0"> 
                              <label className="block capitalize tracking-wide text-gray-700 mb-2" htmlFor="grid-dob">
                                    Date of Birth
                              </label>


                              <Controller
                               name="ReactDatez"
                               control={control}
                               render={({
                              field: { onChange, onBlur, value, name, ref },
                              fieldState: { invalid, isTouched, isDirty, error },
                              formState,
                            }) => (
                                  <ReactDatez
                                      allowPast={true}
                                      allowFuture={true}
                                      name="dob"
                                      id="dob"
                                      disable={false}
                                      handleChange={getAge}
                                      placeholder={date}
                                      {...register('dob')}
                            
                                />
                            )}

                            />
                                
{/*                        
                            <input
                              type="hidden"
                              id="age"
                              name="age"
                              
                            /> */}
                        
                          </div>

                          
                             <div className="w-full px-3 mb-6 md:mb-0 pt-2">
                              <label className="block ml-2 capitalize tracking-wide text-gray-700 mb-2" htmlFor="grid-gender">
                                Gender
                              </label>
                              <input type="radio"
                                id="male"
                                name="gender"
                                value="male"  
                                onChange={handleGender} 
                                {...register('gender')}
                              />
                              <label htmlFor="male">Male</label>

                              <input 
                                type="radio" 
                                id="female"
                                className="ml-2 mb-6"
                                name="gender" 
                                value="female"  
                                onChange={handleGender}  
                                {...register('gender')}

                              />
                              <label htmlFor="female">Female</label>
                          </div>

                          <div className="w-full px-3 mb-6 md:mb-0 pt-2"> 
                              <label className="block capitalize tracking-wide text-gray-700 mb-2" htmlFor="grid-gender">
                                  Occupation
                              </label>
                            <select 
                              className="appearance-none block w-full bg-gray-200 rounded text-gray-700 border border-gray-500 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                              defaultValue={'Selected'}
                              name="occupation"
                              id="occupation"
                              {...register('occupation',  {
                                required: true
                              })}
                            >
                                <option value="Selected" disabled>Select Occupation</option>
                                <option value="Chef" name="chef" >Chef</option>
                                <option value="Yoga instructor" name="yogaInstructor" >Yoga instructor</option>
                                <option value="Developer" name="developer" >Developer</option>
                                <option value="Social media influencer " name="socialMediaInfluencer " >Social media influencer</option>
                            </select>

                          </div>

                          <div className="w-full px-3 mb-6 md:mb-0 pt-2"> 
            
                          {/* <span 
                          className="button-picker"
                          onClick={() => setShowPicker(showPicker => !showPicker)}> {showPicker ? 'Close' : 'Show Color Picker'} </span> */}

                          <label className="block capitalize tracking-wide text-gray-700 mb-2" htmlFor="grid-color">
                              Pick Favourite Colour
                          </label>
                    
                          <Controller
                          name="TwitterPicker"
                            control={control}
                            render={({
                              field: { onChange, onBlur, value, name, ref },
                              fieldState: { invalid, isTouched, isDirty, error },
                              formState,
                            }) => (
                              <TwitterPicker 
                              {...register('favcolor')}
                            
                                type="color"
                                name="favcolor" 
                                id="favcolor" 
                                onChange={updatedColor => setColor(updatedColor.hex)} />
                            )}
                          >

                              {}
                          
                          </Controller>
                          

                          </div>
                          </div>
                  
                        )}

                
                      <div className="w-full px-3 mb-6 mt-3 md:mb-0">
                        
                          <Button currentStep={currentStep} completedFormStep={completedFormStep} isValid={isValid} />
                      </div>
                    </div>
                  </Cbuilder>
              </div>

              
                <div className="my-1 px-1 w-full overflow-hidden sm:my-1 sm:px-1 md:my-1 md:px-1 lg:my-1 lg:px-1 lg:w-2/3 xl:my-1 xl:px-1 xl:w-2/3">
                
              <div className="flex flex-wrap -mx-1 overflow-hidden sm:-mx-1 md:-mx-1 lg:-mx-1 xl:-mx-1">

              <div className="my-1 px-1 w-full overflow-hidden sm:my-1 sm:px-1 md:my-1 md:px-1 lg:my-1 lg:px-1 lg:w-1/2 xl:my-1 xl:px-1 xl:w-1/2">
              <div className="head flex justify-center">
              {age >= 18 && age <50 && entries.gender === 'male' ?  <img className="head" src={mHead} alt="Young Male Head" /> : undefined}
              {age >= 18 && age <50 && entries.gender === 'female' ?  <img className="head" src={fHead} alt="Young Female Head" /> : undefined}
              {age >= 50 && entries.gender === 'male' ?  <img className="head" src={moHead} alt="Old Male Head" /> : undefined}
              {age >= 50 && entries.gender === 'female' ?  <img className="head" src={foHead} alt="Old Female Head" /> : undefined}
            </div>
         
              <div className="body flex justify-center">
                  {entries.occupation === 'Chef' && (
                    <img className="occupation" src={chef} alt="Chef" />
                  )}
                  {entries.occupation === 'Yoga instructor' && (
                    <img className="occupation" src={yoga} alt="Yoga instructor" />
                  )}
                  {entries.occupation === 'Social media influencer ' && (
                    <img className="occupation" src={socialMedia} alt="Social media influencer " />
                  )}
                  {entries.occupation === 'Developer' && (
                    <img className="occupation" src={developer} alt="Developer" />
                  )}
                 
              </div>

              <div className="pants flex justify-center">
            

             {color === '#ffffff' ? '' :   <TouserIcon fillColor={color} />}
         
              </div>
              </div>

              <div className="my-1 px-1 w-full overflow-hidden sm:my-1 sm:px-1 md:my-1 md:px-1 lg:my-1 lg:px-1 lg:w-1/2 xl:my-1 xl:px-1 xl:w-1/2">
              <div className="brand">
                <img src={logo} style={{height: "100px"}} alt="Cyberlife" />
              </div>

              <h1 className="font-bold" style={{fontSize: '22px'}}>Hi there, {entries.name && entries.surname ? <span className="typing">my name is {entries.name} {entries.surname}! </span> : ''} </h1>
               
               <h3>{age > 0 && `and I am ${age} years old. I work as a` }  {entries.occupation !== 'Selected' && <span>{entries.occupation} </span>}</h3>
              </div>
              </div>
                
              </div>
              

        </div>
      </section>      
    </div>
  )
}