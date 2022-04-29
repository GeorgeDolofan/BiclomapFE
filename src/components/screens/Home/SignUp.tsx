import { control } from "leaflet";
import { Card, CardContainer } from "./styles";
import classes from "./styles.module.css";
import { Button } from "../../complex/navBar/styles";


const SignUp = () => {
    return(
        <CardContainer>
        <Card>
            <form>
                <div className={classes.form__control}>
                    <label htmlFor="username">Username</label>
                    <input id='username' name='username' type="text"></input>
                </div>
                <div className={classes.form__control}>
                    <label htmlFor="password">Password</label>
                    <input id='password' name='password' type='password'></input>
                </div>
                <div className={classes.form__control}>
                    <label htmlFor="email">Email</label>
                    <input id='email' name='email' type='email'></input>
                </div>
                <div className={`${classes.form__control} ${classes.center}`}>
                    <Button>Sign Up</Button>
                
                </div>
                
            </form>
        </Card>
        </CardContainer>
    )
}
export default SignUp;