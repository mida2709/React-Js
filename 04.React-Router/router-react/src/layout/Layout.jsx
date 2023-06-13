import {link} from "react-router-dom";

const Layout = (props) => {
    return (
        <div>
            <div>
                <link to="/">Home</link>
                <link to="Luas-Lingkaran">Luas Lingkaran</link>
                <link to="/Counter">Counter</link>
                <link to="/Counter-Two-Number">Counter Two Number</link>
                <link to="/Form-Text">Form Text</link>
                <link to="/Nilai">Nilai</link>

            </div>
            { props.children}
        </div>
    );
}