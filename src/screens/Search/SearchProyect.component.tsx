import { faSearch, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useNavigation } from "@react-navigation/native";
import { styled } from "nativewind";
import React, { useEffect, useState } from "react";
import { Alert, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { TextStyle01 } from "../../components/BaseStyles";
import { Menu } from "../../components/Menu.component";
import Logo from './../../assets/Logo.png';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);
const StyledScroll = styled(ScrollView);
const url = 'https://sosty-api.azurewebsites.net/api/Project/SearchProjects';
let projects :any = []
// let showProjects : boolean = false;
interface projectQueries{
    producerName ?: any,
    projectName ?: any,
    departmentName ?: any,
    cityName ?: any,
    
}

const getProjects = (queris ? : projectQueries, showProjects ?: boolean) =>{
    showProjects = false
    console.log(showProjects)
    
    const finalUrl = url +'?state='+queris?.departmentName+'&city='+queris?.cityName+'&producer='+queris?.producerName+'&project='+queris?.projectName
    fetch(finalUrl).then(res =>{
        res.status == 200 ? res.json().then(data => {
            console.log(data);

            projects = data;
            showProjects = true;

            console.log(projects[0].projectName)
            console.log(showProjects)
            
        }) :
        Alert.alert('Hubo un error obteniedo los proyectos, por favor recarga la pagina')
        
    })
    
    console.log(finalUrl)
}



export const SearchProyect = () => {
    projects[0]={}
    const navigation = useNavigation();
    const [producerName, setProducerName]= useState('')
    const [projectName, setProjectName]= useState('')
    const [departmentName, setDepartmentName]= useState('')
    const [cityName, setCityName]= useState('')
    const [showProjects, setShowProjects]= useState(false)
    useEffect(() => getProjects({producerName,projectName,departmentName,cityName}, showProjects))
    const [sp, setSP]= useState(false)
    const clearData = () =>{
        setProducerName('');
        setProjectName('');
        setDepartmentName('');
        setCityName('');
    }

    return (
      <StyledView className="w-full h-full flex justify-around items-center">
            <StyledScroll className='w-full'>
                <StyledView className="w-full h-full flex justify-around items-center ">
                    <StyledView className="flex justify-center">
                        <Image
                            source={Logo}
                            style={{marginTop: 15, marginLeft: 45, marginBottom: 32}}
                        />
                    </StyledView>

                    <StyledView className="flex justify-center items-center">
                        <StyledText className="text-base w-80" style={{...TextStyle01.text, color:'gray'}}>Nombre Productor</StyledText>
                        <StyledTextInput
                            placeholder="Digite el nombre del productor"
                            textContentType="name"
                            className="w-80  border-2 border-gray-300 rounded-lg mb-9"
                            onChangeText={value => setProducerName(value)}
                            value={producerName}
                            // ref={ searchProducerInput}
                        />
                    </StyledView>

                    <StyledView className="flex justify-center items-center">
                        <StyledText className="text-base w-80" style={{...TextStyle01.text, color:'gray'}}>Proyecto</StyledText>
                        <StyledTextInput
                            placeholder="Digite el nombre del proyecto"
                            textContentType="name"
                            className="w-80  border-2 border-gray-300 rounded-lg mb-9"
                            onChangeText={value => setProjectName(value)}
                            value={projectName}
                        />
                    </StyledView>

                    <StyledView className="flex justify-center items-center">
                        <StyledText className="text-base w-80" style={{...TextStyle01.text, color:'gray'}}>Departamento</StyledText>
                        <StyledTextInput
                            placeholder="Digite el nombre del departamento"
                            textContentType="name"
                            className="w-80  border-2 border-gray-300 rounded-lg mb-9"
                            onChangeText={value => setDepartmentName(value)}
                            value={departmentName}
                            
                        />
                    </StyledView>

                    <StyledView className="flex justify-center items-center">
                        <StyledText className="text-base w-80" style={{...TextStyle01.text, color:'gray'}}>Municipio/Ciudad</StyledText>
                        <StyledTextInput
                            placeholder="Digite el nombre del municipio/ciudad"
                            textContentType="name"
                            className="w-80  border-2 border-gray-300 rounded-lg mb-9"
                            onChangeText={value => setCityName(value)}
                            value={cityName}
                        />
                    </StyledView>

                    <StyledView className="items-center">
                        <StyledView className="w-80 mb-4">
                            <TouchableOpacity
                            style={styles.primaryButton}
                            onPress={()=>getProjects({producerName,projectName,departmentName,cityName},showProjects)}>
                                <FontAwesomeIcon icon={faSearch} size={14} style={{ color: 'white' , width:'30%', marginRight:10}} />
                                <StyledText className="text-base" style={styles.registerText}>
                                    Buscar Proyecto
                                </StyledText>
                            </TouchableOpacity>
                        </StyledView>
                    </StyledView>

                    <StyledView className="items-center">
                        <StyledView className="w-80 mb-4">
                            <TouchableOpacity
                                style={styles.button}
                                onPress={()=>clearData()}>
                                <FontAwesomeIcon icon={faXmark} size={16} style={{ color: '#00BD56' , width:'30%', marginRight:10}} />
                                <StyledText className="text-base" style={styles.greenText}>
                                    Limpiar Campos
                                </StyledText>
                            </TouchableOpacity>
                        </StyledView>
                    </StyledView>

                    {/* <StyledView className="flex justify-center items-center w-80 p-5 rounded-xl bg-white m-5">
                        <StyledView className="w-full">
                        <StyledView className="flex justify-center">
                        {showProjects == true && <Image
                            source={{uri:'https://sosty.blob.core.windows.net/sosty-public-files/20221109151204.jpeg'}}
                            style={{marginTop: 15, marginLeft: 45, marginBottom: 32}}
                        />}
                        </StyledView>

                            <StyledText style={{...TextStyle01.text, color:'black'}} font-medium className="text-xl mb-6 ">{projects[0].projectName}
                            </StyledText>
                            {showProjects == true ? <Text>{projects[0].projectName}</Text>: null}
                            
                        </StyledView>
                    </StyledView> */}

                    {showProjects == false ? <StyledView className="flex justify-center items-center w-80 p-5 rounded-xl bg-white m-5">
                        <StyledText style={{...TextStyle01.text, color:'#00BD56'}} font-medium className="text-xl mb-6 ">No se encontraron projectos
                        </StyledText>
                    </StyledView>: null}

                    

                </StyledView>
  
            </StyledScroll>
          <Menu activeRoute="search"></Menu>
        
  
        
      </StyledView>
    );
  };

  const styles = StyleSheet.create({
    outterRadio: {
      width: 20,
      height: 20,
      borderRadius: 15,
      borderWidth: 1,
      borderColor: '#D3D3D3',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 5,
      marginTop: 4,
    },
    innerRadio: {
      width: 12,
      height: 12,
      borderRadius: 12,
      backgroundColor: '#00BD56',
    },
    outterCB: {
      width: 20,
      height: 20,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#D3D3D3',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 5,
      marginTop: 5,
    },
    innerCB: {
      width: 12,
      height: 12,
      borderRadius: 3,
      backgroundColor: '#00BD56',
    },
    primaryButton: {
      justifyContent: 'center',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#00BD56',
      borderRadius: 12,
      padding: 10,
    },
    button: {
      justifyContent: 'center',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
      borderColor: '#00BD56',
      borderRadius: 12,
      borderWidth: 2,
      padding: 10,
    },
    registerText: {
        ...TextStyle01.text,
      color: '#FFFFFF',
    },
    greenText: {
        ...TextStyle01.text,
      color: '#00BD56',
    },
  });