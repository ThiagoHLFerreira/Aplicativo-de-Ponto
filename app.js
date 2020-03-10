import react, {component} from 'react';
import{
    platform,
    stylesheet,
    text,
    view
} from 'react-native';

export default class app extends component {
        
        render(){
            
            return(
            
                    <view style={styles.container}>
                        <text style={styles.welcome}>
                                
                                Bem vindo React Native!!
                                
                        </text>
                    </view>      
                    
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
