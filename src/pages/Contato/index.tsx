import { App } from "../../App";
import { ContainerFirst, 
    ContainerTextFirst, 
    ContainerPeopleFirst } from './styles';

import personal_picture_contact from '../../assets/images/imagem2.png';

export function Contato() {
    return (
        <App>
            <ContainerFirst>
                <ContainerTextFirst>
                    <h2>Contate-me</h2>
                    <form action="" method="post">
                        <div>
                            <label>Name:</label>
                            <input type="text" name="name" id="name" autofocus>
                        </div>
                        <div>
                            <label>Email:</label>
                            <input type="text" name="name" id="name" autofocus>
                        </div>
                        <div>
                            <label>Message:</label>
                            <textarea name="message" id="message" rows="5" class="textarea is-large"></textarea>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </ContainerTextFirst>
                <ContainerPeopleFirst>
                    <img src={personal_picture_contact} alt="Um foto do dono do Site" />
                </ContainerPeopleFirst>
            </ContainerFirst>
        </App>
    )
}