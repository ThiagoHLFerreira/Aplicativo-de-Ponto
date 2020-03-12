import react, {component} from 'react';
import{
    platform,
    stylesheet,
    text,
    view,
    keyboardavoidingview,
    textinput,
    touchbleopacity
} from 'react-native';

export default class app extends component {

        render(){

            return(

                    <keyboardavoidingview style={styles.container}>
                        <text style={styles.welcome}>
                              <view>
                                 <Image source={require('./src/assets/logo.png')}/>

                                Bem vindo React Native!!
                              </view>

                              <view>
                                 <textinput pleaceholder="usuario" autocorrect={false} onchangetext={()=>{}}/>

                                 <textinput pleaceholder="senha" autocorrect={false} onchangetext={()=>{}}/>

                                 <touchbleopacity>
                                       <text>Logar</text>
                                 </touchbleopacity>

                                 <touchbleopacity>
                                       <text>Cadastre-se</text>
                                 </touchbleopacity>

                              </view>

                        </text>
                    </keyboardavoidingview>

            );

        }

}

const styles = stylesheet.create({
    container:{
        flex: 1,
        justifycontent: 'center',
        alignitens: 'center',
        backgroundcolor: 'black'
    },
    welcome: {
        fontsize: 20,
        textalign: 'center',
        margin: 10
        }
    }
);
