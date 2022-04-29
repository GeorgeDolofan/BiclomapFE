import { control } from "leaflet";
import { Card, CardContainer } from "./styles";
import classes from "./styles.module.css";
import { Button } from "../../complex/navBar/styles";

const NewUserForm = () => {
    return(
        <CardContainer>
        <Card>
            <div>
                <img className={classes.bike} src={require("../../../../src/bicycle.png")}/>
            </div>
            <form>
                <div className={classes.form__control}>
                    <label htmlFor="username">Username</label>
                    <input id='username' name='username' type="text"></input>
                </div>
                <div className={classes.form__control}>
                    <label htmlFor="password">Password</label>
                    <input id='password' name='password' type='password'></input>
                </div>
                <div className={`${classes.form__control} ${classes.center}`}>
                    <Button>Login</Button>
                  
                </div>
                
            </form>
        </Card>
        </CardContainer>
    )

}

export default NewUserForm;