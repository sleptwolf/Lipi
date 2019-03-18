import React from 'react';
import {
  Image,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  View,
  Text,
  Modal,
  Dimensions,
  Animated,
  Easing,
  ViewPagerAndroid
} from 'react-native';
import Header from './Header';
import LottieView from 'lottie-react-native';
import SoundPlayer from 'react-native-sound-player';
import Icon from 'react-native-vector-icons/AntDesign';
const { width, height } = Dimensions.get('window');

const data = [
  require('../assets/consonants/1.png'),
  require('../assets/consonants/2.png'),
  require('../assets/consonants/3.png'),
  require('../assets/consonants/4.png'),
  require('../assets/consonants/5.png'),
  require('../assets/consonants/6.png'),
  require('../assets/consonants/7.png'),
  require('../assets/consonants/8.png'),
  require('../assets/consonants/9.png'),
  require('../assets/consonants/10.png'),
  require('../assets/consonants/11.png'),
  require('../assets/consonants/12.png'),
  require('../assets/consonants/13.png'),
  require('../assets/consonants/14.png'),
  require('../assets/consonants/15.png'),
  require('../assets/consonants/16.png'),
  require('../assets/consonants/17.png'),
  require('../assets/consonants/18.png'),
  require('../assets/consonants/19.png'),
  require('../assets/consonants/20.png'),
  require('../assets/consonants/21.png'),
  require('../assets/consonants/22.png'),
  require('../assets/consonants/23.png'),
  require('../assets/consonants/24.png'),
  require('../assets/consonants/25.png'),
  require('../assets/consonants/26.png'),
  require('../assets/consonants/27.png'),
  require('../assets/consonants/28.png'),
  require('../assets/consonants/29.png'),
  require('../assets/consonants/30.png'),
  require('../assets/consonants/31.png'),
  require('../assets/consonants/32.png'),
  require('../assets/consonants/33.png'),
  require('../assets/consonants/34.png'),
  require('../assets/consonants/35.png'),
  require('../assets/consonants/36.png')
];

const image = [
  require('../assets/consonants/images/1.png'),
  require('../assets/consonants/images/2.png'),
  require('../assets/consonants/images/3.png'),
  require('../assets/consonants/images/4.png'),
  require('../assets/consonants/images/5.png'),
  require('../assets/consonants/images/6.png'),
  require('../assets/consonants/images/7.png'),
  require('../assets/consonants/images/8.png'),
  require('../assets/consonants/images/9.png'),
  require('../assets/consonants/images/10.png'),
  require('../assets/consonants/images/11.png'),
  require('../assets/consonants/images/12.png'),
  require('../assets/consonants/images/13.png'),
  require('../assets/consonants/images/14.png'),
  require('../assets/consonants/images/15.png'),
  require('../assets/consonants/images/16.png'),
  require('../assets/consonants/images/17.png'),
  require('../assets/consonants/images/18.png'),
  require('../assets/consonants/images/19.png'),
  require('../assets/consonants/images/20.png'),
  require('../assets/consonants/images/21.png'),
  require('../assets/consonants/images/22.png'),
  require('../assets/consonants/images/23.png'),
  require('../assets/consonants/images/24.png'),
  require('../assets/consonants/images/25.png'),
  require('../assets/consonants/images/26.png'),
  require('../assets/consonants/images/27.png'),
  require('../assets/consonants/images/28.png'),
  require('../assets/consonants/images/29.png'),
  require('../assets/consonants/images/30.png'),
  require('../assets/consonants/images/31.png'),
  require('../assets/consonants/images/32.png'),
  require('../assets/consonants/images/33.png'),
  require('../assets/consonants/images/34.png'),
  require('../assets/consonants/images/35.png'),
  require('../assets/consonants/images/36.png')
];

const word = [
  require('../assets/consonants/words/1.png'),
  require('../assets/consonants/words/2.png'),
  require('../assets/consonants/words/3.png'),
  require('../assets/consonants/words/4.png'),
  require('../assets/consonants/words/5.png'),
  require('../assets/consonants/words/6.png'),
  require('../assets/consonants/words/7.png'),
  require('../assets/consonants/words/8.png'),
  require('../assets/consonants/words/9.png'),
  require('../assets/consonants/words/10.png'),
  require('../assets/consonants/words/11.png'),
  require('../assets/consonants/words/12.png'),
  require('../assets/consonants/words/13.png'),
  require('../assets/consonants/words/14.png'),
  require('../assets/consonants/words/15.png'),
  require('../assets/consonants/words/16.png'),
  require('../assets/consonants/words/17.png'),
  require('../assets/consonants/words/18.png'),
  require('../assets/consonants/words/19.png'),
  require('../assets/consonants/words/20.png'),
  require('../assets/consonants/words/21.png'),
  require('../assets/consonants/words/22.png'),
  require('../assets/consonants/words/23.png'),
  require('../assets/consonants/words/24.png'),
  require('../assets/consonants/words/25.png'),
  require('../assets/consonants/words/26.png'),
  require('../assets/consonants/words/27.png'),
  require('../assets/consonants/words/28.png'),
  require('../assets/consonants/words/29.png'),
  require('../assets/consonants/words/30.png'),
  require('../assets/consonants/words/31.png'),
  require('../assets/consonants/words/32.png'),
  require('../assets/consonants/words/33.png'),
  require('../assets/consonants/words/34.png'),
  require('../assets/consonants/words/35.png'),
  require('../assets/consonants/words/36.png')
];

const audio = [
  'c1',
  'c2',
  'c3',
  'c4',
  'c5',
  'c6',
  'c7',
  'c8',
  'c9',
  'c10',
  'c11',
  'c12',
  'c13',
  'c14',
  'c15',
  'c16',
  'c17',
  'c18',
  'c19',
  'c20',
  'c21',
  'c22',
  'c23',
  'c24',
  'c25',
  'c26',
  'c27',
  'c28',
  'c29',
  'c30',
  'c29',
  'c31',
  'c32',
  'c33',
  'c34',
  'c35'
];

class Consonants extends React.Component {
  constructor() {
    super();
    this.animatedValue = new Animated.Value(0);
    this.animatedValue2 = new Animated.Value(0);
    this.animatedValue3 = new Animated.Value(0);
    this.animatedSlideValue = new Animated.Value(0);
    this.animatedSlideValue2 = new Animated.Value(0);
    this.state = {
      visible: false,
      i: 0,
      disableNp: false,
      selected: 0,
      audio: null,
      showing: 0
    };
  }

  static navigationOptions = {
    headerVisible: false,
    gesturesEnabled: false,
    header: null
  };

  componentDidMount() {
    StatusBar.setHidden(true);
    this.setState({ isHidden: false });
    this.animate();
  }
  showModal(x, y, z) {
    this.setState({ visible: x, selected: y, audio: z });
    if (x === false) {
      this.animatedValue3.setValue(0);
      this.animatedSlideValue.setValue(0);
      this.animatedSlideValue2.setValue(0);
      this.setState({ showing: 0 });
    }
  }
  animate() {
    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 1000,
      easing: Easing.ease
    }).start();
  }
  blast() {
    this.animatedValue2.setValue(0);
    this.animatedValue3.setValue(0);
    Animated.parallel([
      Animated.timing(this.animatedValue2, {
        toValue: 1,
        duration: 2000,
        easing: Easing.ease
      }),
      Animated.timing(this.animatedValue3, {
        toValue: 1,
        duration: 2500,
        delay: 1000,
        easing: Easing.ease
      })
    ]).start(() => this.play(audio[this.state.i]));
  }

  next() {
    if (this.state.i !== 30) this.setState({ i: this.state.i + 6 });
  }

  prev() {
    if (this.state.i !== 0) this.setState({ i: this.state.i - 6 });
  }
  play(a) {
    try {
      SoundPlayer.playSoundFile(this.state.audio || a, 'm4a');
    } catch (e) {
      console.log('error:', e);
    }
  }

  RenderModal() {
    const sad = this.animatedValue2.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1]
    });
    const opacity = this.animatedValue3.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1]
    });
    return (
      <Modal
        animationType='fade'
        transparent
        visible={this.state.visible}
        onRequestClose={() => this.showModal(false)}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(52, 52, 52, 0.8)'
          }}
        >
          <TouchableOpacity
            onPress={() => this.showModal(false, 0)}
            style={{ height: '100%', width: '100%' }}
          />
        </View>
        <ViewPagerAndroid
          style={{
            flex: 3,
            paddingVertical: 10,
            backgroundColor: 'rgba(52, 52, 52, 0.8)',
            // backgroundColor: 'red',
            // borderWidth: 1,
            justifyContent: 'center',
            flexDirection: 'row',
            width: '100%'
          }}
          initialPage={0}
          pageMargin={5}
        >
          <View
            style={{ borderRadius: 40, padding: 10, backgroundColor: 'white' }}
            key='1'
          >
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                width: '90%'
              }}
            >
              <View
                style={{
                  height: '30%',
                  width: '90%',
                  flexDirection: 'row'
                }}
              >
                <View
                  style={{
                    height: 100,
                    width: 100,
                    marginLeft: 20,
                    justifyContent: 'center',
                    alignContent: 'center'
                  }}
                >
                  <TouchableOpacity
                    onPress={() => this.play(audio[this.state.i])}
                  >
                    <Image
                      source={data[this.state.selected]}
                      style={{ resizeMode: 'stretch', height: 80, width: 80 }}
                    />
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    height: 100,
                    width: 180,
                    marginLeft: 20,
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <Image
                    source={word[this.state.selected]}
                    style={{
                      resizeMode: 'stretch',
                      height: 40,
                      width: 100,
                      marginTop: 5
                    }}
                  />
                </View>
              </View>
              <View
                style={{
                  height: '55%',
                  width: '90%'
                }}
              >
                <LottieView
                  source={require('./blast.json')}
                  progress={sad}
                  style={{
                    width: 250,
                    height: 200,
                    position: 'absolute',
                    alignSelf: 'center',
                    top: -15
                  }}
                />
                <TouchableOpacity
                  onPress={() => this.play(audio[this.state.i])}
                >
                  <Animated.Image
                    source={image[this.state.selected]}
                    style={{
                      resizeMode: 'stretch',
                      height: 150,
                      width: 150,
                      alignSelf: 'center',
                      opacity
                    }}
                  />
                </TouchableOpacity>
              </View>

              <TouchableOpacity onPress={() => this.showModal(false, 0)}>
                <View
                  style={{
                    height: 30,
                    width: 30,
                    backgroundColor: 'red',
                    borderRadius: 90,
                    justifyContent: 'center'
                  }}
                >
                  <Text
                    style={{
                      color: 'white',
                      textAlign: 'center',
                      fontSize: 30
                    }}
                  >
                    X
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{ borderRadius: 40, padding: 10, backgroundColor: 'white' }}
            key='2'
          >
            <LottieView
              source={require('./comp1.json')}
              style={{ height: 80, width: 80 }}
              autoPlay
            />
          </View>
        </ViewPagerAndroid>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(52, 52, 52, 0.8)'
          }}
        >
          <TouchableOpacity
            onPress={() => this.showModal(false, 0)}
            style={{ height: '100%', width: '100%' }}
          />
        </View>
      </Modal>
    );
  }

  render() {
    const { bg, top, home, back } = styles;
    const { goBack } = this.props.navigation;

    const left = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [-width, 0]
    });

    return (
      <ImageBackground source={require('../assets/bg/bg3.png')} style={bg}>
        <Header
          onPressHome={() => this.props.navigation.navigate('ChoicePage')}
          onPressBack={() => goBack()}
        />
        <Animated.View
          style={{
            left,
            top: height * 0.03,
            backgroundColor: 'white',
            height: height * 0.65,
            width: width - 70,
            flexDirection: 'row',
            paddingHorizontal: 5,
            borderRadius: 30,
            marginTop: 20
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: 'space-around',
              alignItems: 'center',
              marginBottom: 45
            }}
          >
            <TouchableOpacity
              onPress={() => {
                this.play(audio[this.state.i]);
                this.showModal(true, this.state.i, audio[this.state.i]);
                this.blast();
              }}
            >
              <Image
                source={data[this.state.i]}
                style={{
                  height: height * 0.1,
                  width: width * 0.25,
                  resizeMode: 'contain'
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.play(audio[this.state.i + 2]);
                this.showModal(true, this.state.i + 2, audio[this.state.i + 2]);
                this.blast();
              }}
            >
              <Image
                source={data[this.state.i + 2]}
                style={{
                  height: height * 0.1,
                  width: width * 0.25,
                  resizeMode: 'contain'
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.play(audio[this.state.i + 4]);
                this.showModal(true, this.state.i + 4, audio[this.state.i + 4]);
                this.blast();
              }}
            >
              <Image
                source={data[this.state.i + 4]}
                style={{
                  height: height * 0.1,
                  width: width * 0.25,
                  resizeMode: 'contain'
                }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'space-around',
              alignItems: 'center',
              marginTop: 45
            }}
          >
            <TouchableOpacity
              onPress={() => {
                this.play(audio[this.state.i + 1]);
                this.showModal(true, this.state.i + 1, audio[this.state.i + 1]);
                this.blast();
              }}
            >
              <Image
                source={data[this.state.i + 1]}
                style={{
                  height: height * 0.1,
                  width: width * 0.25,
                  resizeMode: 'contain'
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.play(audio[this.state.i + 3]);
                this.showModal(true, this.state.i + 3, audio[this.state.i + 3]);
                this.blast();
              }}
            >
              <Image
                source={data[this.state.i + 3]}
                style={{
                  height: height * 0.1,
                  width: width * 0.25,
                  resizeMode: 'contain'
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.play(audio[this.state.i + 5]);
                this.showModal(true, this.state.i + 5, audio[this.state.i + 5]);
                this.blast();
              }}
            >
              <Image
                source={data[this.state.i + 5]}
                style={{
                  height: height * 0.1,
                  width: width * 0.25,
                  resizeMode: 'contain'
                }}
              />
            </TouchableOpacity>
          </View>
        </Animated.View>
        <View
          style={{
            width,
            height: 50,
            marginTop: 50,
            flexDirection: 'row',
            paddingHorizontal: 10
          }}
        >
          <View style={{ flex: 1 }}>
            {/* should change the shown texts */}
            <TouchableOpacity onPress={() => this.prev()}>
              <Animated.Image
                source={require('../assets/buttons/previous.png')}
                style={{
                  height: 45,
                  width: 45,
                  resizeMode: 'stretch',
                  opacity: this.state.i == 0 ? 0 : 1
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, marginLeft: '75%' }}>
            <TouchableOpacity onPress={() => this.next()}>
              <Animated.Image
                source={require('../assets/buttons/next.png')}
                style={{
                  height: 45,
                  width: 45,
                  resizeMode: 'stretch',
                  opacity: this.state.i == 30 ? 0 : 1
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
        {this.RenderModal()}
      </ImageBackground>
    );
  }
}

export { Consonants };

const styles = {
  bg: {
    flex: 1,

    alignItems: 'center'
  },
  top: {
    flexDirection: 'row',
    padding: 10,
    height: 65
  },
  home: {
    flex: 1,
    marginLeft: '70%'
  },
  back: {
    flex: 1
  },
  container: {
    margin: 10,
    borderRadius: 20,
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5
  },
  img: {
    height: 200,
    width: 200
  },
  closeButton: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    width: 100
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 20
  },
  topContainer: {
    flex: 4,
    flexDirection: 'row',
    margin: 5
  },
  leftTop: {
    flex: 1,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  rightTop: {
    flex: 1,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  pronounciationText: {
    textAlign: 'center',
    fontSize: 30
  }
};
