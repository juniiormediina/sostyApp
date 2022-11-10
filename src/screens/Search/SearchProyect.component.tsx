import {
  faCalendarDays,
  faChartSimple,
  faDollarSign,
  faSearch,
  faUsers,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';
import {styled} from 'nativewind';
import React, {useEffect, useState} from 'react';
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {TextStyle01} from '../../components/BaseStyles';
import {FloatButton} from '../../components/FloatButton/FloatButton.component';
import {Menu} from '../../components/Menu.component';
import {Separator} from '../../components/Separator';
import Logo from './../../assets/Logo.png';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);
const StyledScroll = styled(ScrollView);
const url = 'https://sosty-api.azurewebsites.net/api/Project/SearchProjects';
let projects: any = [];
interface projectQueries {
  producerName?: any;
  projectName?: any;
  departmentName?: any;
  cityName?: any;
}

export const SearchProyect = () => {
  projects[0] = {};
  const navigation = useNavigation();
  const [producerName, setProducerName] = useState('');
  const [projectName, setProjectName] = useState('');
  const [departmentName, setDepartmentName] = useState('');
  const [cityName, setCityName] = useState('');
  const [showProjects, setShowProjects] = useState(false);
  const [dataProject, setDataProjects] = useState([]);

  const getProjects = (queris?: projectQueries) => {
    setShowProjects(false);
    setDataProjects([]);

    const finalUrl =
      url +
      '?state=' +
      queris?.departmentName +
      '&city=' +
      queris?.cityName +
      '&producer=' +
      queris?.producerName +
      '&project=' +
      queris?.projectName;
    fetch(finalUrl).then(res => {
      res.status == 200
        ? res.json().then(data => {
            console.log(data);
            projects = data;
            setDataProjects(data);
            console.log(dataProject.length);
            if (dataProject.length != 0) {
              setShowProjects(true);
            }
            console.log(dataProject[1]);
            console.log(data[1].projectName);
          })
        : Alert.alert(
            'Hubo un error obteniedo los proyectos, por favor recarga la pagina',
          );
    });

    console.log(finalUrl);
  };

  useEffect(
    () => getProjects({producerName, projectName, departmentName, cityName}),
    [],
  );

  const clearData = () => {
    setProducerName('');
    setProjectName('');
    setDepartmentName('');
    setCityName('');
    getProjects({producerName, projectName, departmentName, cityName});
  };

  return (
    <StyledView className="w-full h-full flex justify-around items-center">
      <StyledScroll className="w-full">
        <StyledView className="w-full h-full flex justify-around items-center ">
          <StyledView className="flex justify-center">
            <Image
              source={Logo}
              style={{marginTop: 15, marginLeft: 45, marginBottom: 32}}
            />
          </StyledView>

          <StyledView className="flex justify-center items-center">
            <StyledText
              className="text-base w-80"
              style={{...TextStyle01.text, color: 'gray'}}>
              Nombre Productor
            </StyledText>
            <StyledTextInput
              placeholder="Digite el nombre del productor"
              textContentType="name"
              className="w-80  border-2 border-gray-300 rounded-lg mb-9"
              onChangeText={value => setProducerName(value)}
              value={producerName}
            />
          </StyledView>

          <StyledView className="flex justify-center items-center">
            <StyledText
              className="text-base w-80"
              style={{...TextStyle01.text, color: 'gray'}}>
              Proyecto
            </StyledText>
            <StyledTextInput
              placeholder="Digite el nombre del proyecto"
              textContentType="name"
              className="w-80  border-2 border-gray-300 rounded-lg mb-9"
              onChangeText={value => setProjectName(value)}
              value={projectName}
            />
          </StyledView>

          <StyledView className="flex justify-center items-center">
            <StyledText
              className="text-base w-80"
              style={{...TextStyle01.text, color: 'gray'}}>
              Departamento
            </StyledText>
            <StyledTextInput
              placeholder="Digite el nombre del departamento"
              textContentType="name"
              className="w-80  border-2 border-gray-300 rounded-lg mb-9"
              onChangeText={value => setDepartmentName(value)}
              value={departmentName}
            />
          </StyledView>

          <StyledView className="flex justify-center items-center">
            <StyledText
              className="text-base w-80"
              style={{...TextStyle01.text, color: 'gray'}}>
              Municipio/Ciudad
            </StyledText>
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
                onPress={() =>
                  getProjects({
                    producerName,
                    projectName,
                    departmentName,
                    cityName,
                  })
                }>
                <FontAwesomeIcon
                  icon={faSearch}
                  size={14}
                  style={{color: 'white', width: '30%', marginRight: 10}}
                />
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
                onPress={() => clearData()}>
                <FontAwesomeIcon
                  icon={faXmark}
                  size={16}
                  style={{color: '#00BD56', width: '30%', marginRight: 10}}
                />
                <StyledText className="text-base" style={styles.greenText}>
                  Limpiar Campos
                </StyledText>
              </TouchableOpacity>
            </StyledView>
          </StyledView>

          {dataProject.length != 0 && showProjects == true && (
            <StyledView className="flex justify-center items-center w-80 p-5 rounded-xl bg-white m-5">
              <StyledView className="w-full">
                {dataProject.length != 0 &&
                  showProjects == true && (
                    <StyledText
                      style={{...TextStyle01.text, color: '#00BD56'}}
                      font-medium
                      className="text-xl mb-6 ">
                      {dataProject[1] && dataProject[1].projectName
                        ? dataProject[1].projectName
                        : null + ' (' + dataProject[1] !== undefined &&
                          dataProject[1].projectCode
                        ? dataProject[1].projectCode
                        : null + ')'}
                    </StyledText>
                  ) && (
                    <StyledText
                      style={{...TextStyle01.text, color: '#00BD56'}}
                      font-medium
                      className="text-xl mb-6 ">
                      {dataProject[1] && dataProject[1].projectCode
                        ? dataProject[1].projectCode
                        : null}
                    </StyledText>
                  )}

                <StyledView
                  style={{
                    justifyContent: 'flex-start',
                    display: 'flex',
                    flexDirection: 'row',
                  }}>
                  <FontAwesomeIcon
                    icon={faChartSimple}
                    size={40}
                    style={{
                      color: '#00BD56',
                      width: '30%',
                      marginRight: 10,
                      marginTop: 5,
                    }}
                  />
                  <StyledView>
                    {dataProject.length != 0 && showProjects == true && (
                      <StyledText
                        style={{...TextStyle01.text, color: '#00BD56'}}
                        font-medium
                        className="text-xl  ">
                        {dataProject[1] && dataProject[1].projectProfitability
                          ? dataProject[1].projectProfitability
                          : null + ' %(E.A)'}
                      </StyledText>
                    )}
                    <StyledText
                      style={{
                        ...TextStyle01.text,
                        color: '#00BD56',
                        fontSize: 15,
                      }}
                      font-medium
                      className="text-sm mb-6 ">
                      Rentabilidad Estimada*
                    </StyledText>
                  </StyledView>
                </StyledView>

                <StyledView
                  style={{
                    justifyContent: 'flex-start',
                    display: 'flex',
                    flexDirection: 'row',
                  }}>
                  <FontAwesomeIcon
                    icon={faUsers}
                    size={40}
                    style={{
                      color: '#00BD56',
                      width: '30%',
                      marginRight: 10,
                      marginTop: 5,
                    }}
                  />
                  <StyledView>
                    {dataProject.length != 0 && showProjects == true && (
                      <StyledText
                        style={{...TextStyle01.text, color: '#00BD56'}}
                        font-medium
                        className="text-xl  ">
                        {dataProject[1] && dataProject[1].amountOfInvestors
                          ? dataProject[1].amountOfInvestors
                          : null}
                      </StyledText>
                    )}
                    <StyledText
                      style={{
                        ...TextStyle01.text,
                        color: '#00BD56',
                        fontSize: 15,
                      }}
                      font-medium
                      className="text-sm mb-6 ">
                      NeoGanaderos
                    </StyledText>
                  </StyledView>
                </StyledView>

                <StyledView
                  style={{
                    justifyContent: 'flex-start',
                    display: 'flex',
                    flexDirection: 'row',
                  }}>
                  <FontAwesomeIcon
                    icon={faDollarSign}
                    size={40}
                    style={{
                      color: '#00BD56',
                      width: '30%',
                      marginRight: 10,
                      marginTop: 5,
                    }}
                  />
                  <StyledView>
                    <StyledText
                      style={{...TextStyle01.text, color: '#00BD56'}}
                      font-medium
                      className="text-xl  ">
                      $700,000 COP
                    </StyledText>
                    <StyledText
                      style={{
                        ...TextStyle01.text,
                        color: '#00BD56',
                        fontSize: 15,
                      }}
                      font-medium
                      className="text-sm mb-6 ">
                      Inversion Minima
                    </StyledText>
                  </StyledView>
                </StyledView>

                <StyledView
                  style={{
                    justifyContent: 'flex-start',
                    display: 'flex',
                    flexDirection: 'row',
                  }}>
                  <FontAwesomeIcon
                    icon={faCalendarDays}
                    size={40}
                    style={{
                      color: '#00BD56',
                      width: '30%',
                      marginRight: 10,
                      marginTop: 5,
                    }}
                  />
                  <StyledView>
                    {dataProject.length != 0 && showProjects == true && (
                      <StyledText
                        style={{...TextStyle01.text, color: '#00BD56'}}
                        font-medium
                        className="text-xl  ">
                        {dataProject[1] && dataProject[1].daysLeft
                          ? dataProject[1].daysLeft
                          : null + ' dias'}
                      </StyledText>
                    )}
                    <StyledText
                      style={{
                        ...TextStyle01.text,
                        color: '#00BD56',
                        fontSize: 15,
                      }}
                      font-medium
                      className="text-sm mb-6 ">
                      Restantes
                    </StyledText>
                  </StyledView>
                </StyledView>

                <StyledView
                  style={{
                    justifyContent: 'flex-start',
                    display: 'flex',
                    flexDirection: 'row',
                  }}>
                  <StyledView>
                    {dataProject.length != 0 && showProjects == true && (
                      <StyledText
                        style={{
                          ...TextStyle01.text,
                          color: '#00BD56',
                          fontSize: 15,
                        }}
                        font-medium
                        className="text-xl  ">
                        {dataProject[1] && dataProject[1].finalKilogramPrice
                          ? dataProject[1].finalKilogramPrice
                          : null + ' (' + dataProject[1].investmentCollected
                          ? dataProject[1].investmentCollected
                          : null + ' Kg)'}
                      </StyledText>
                    )}
                    {dataProject.length != 0 && showProjects == true && (
                      <StyledText
                        style={{
                          ...TextStyle01.text,
                          color: '#00BD56',
                          fontSize: 15,
                        }}
                        font-medium
                        className="text-sm mb-6 ">
                        {dataProject[1] && dataProject[1].amountOfCattles
                          ? dataProject[1].amountOfCattles
                          : null +
                            ' Animales (' +
                            dataProject[1].investmentRequired
                          ? dataProject[1].investmentRequired
                          : null + ' Kg)'}
                      </StyledText>
                    )}
                  </StyledView>
                </StyledView>
                <Separator></Separator>

                <StyledView
                  style={{
                    justifyContent: 'flex-start',
                    display: 'flex',
                    flexDirection: 'row',
                  }}>
                  <StyledView>
                    {dataProject.length != 0 && showProjects == true && (
                      <StyledText
                        style={{
                          ...TextStyle01.text,
                          color: '#00BD56',
                          fontSize: 15,
                        }}
                        font-medium
                        className="text-xl  ">
                        {dataProject[1] && dataProject[1].projectProgres
                          ? dataProject[1].projectProgres
                          : null + ' % Recaudado'}
                      </StyledText>
                    )}
                    {dataProject.length != 0 && showProjects == true && (
                      <StyledText
                        style={{
                          ...TextStyle01.text,
                          color: 'orange',
                          fontSize: 15,
                        }}
                        font-medium
                        className="text-sm mb-6 ">
                        {'En caso de no completar el 100% se comprarán los ' +
                          dataProject[1] && dataProject[1].amountOfCattles
                          ? dataProject[1].amountOfCattles
                          : null +
                            ' animales actuales y la rentabilidad puede variar un poco'}
                      </StyledText>
                    )}
                  </StyledView>
                </StyledView>

                <StyledView className="items-center">
                  <StyledView className="w-60 mb-4">
                    <TouchableOpacity style={styles.primaryButton}>
                      <StyledText
                        className="text-base"
                        style={styles.registerText}>
                        Participar
                      </StyledText>
                    </TouchableOpacity>
                  </StyledView>
                </StyledView>

                <StyledView className="items-center">
                  <StyledView className="w-60 mb-4">
                    <TouchableOpacity style={styles.button}>
                      <StyledText
                        className="text-base"
                        style={styles.greenText}>
                        Mas Información
                      </StyledText>
                    </TouchableOpacity>
                  </StyledView>
                </StyledView>
              </StyledView>
            </StyledView>
          )}

          {dataProject.length == 0 ? (
            <StyledView className="flex justify-center items-center w-80 p-5 rounded-xl bg-white m-5">
              <StyledText
                style={{...TextStyle01.text, color: '#00BD56'}}
                font-medium
                className="text-xl mb-6 ">
                No se encontraron projectos
              </StyledText>
            </StyledView>
          ) : null}
        </StyledView>
      </StyledScroll>
      <FloatButton />
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
