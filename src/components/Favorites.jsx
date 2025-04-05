import { useState } from "react"

const Favorites = () => {

    const [listFavorites, setListFavorites] = useState([]);

    const DeleteFavorites = () => {
        setListFavorites([]);
    };

    return (
        <>
            <div className="container">
                <ul>
                    <li>

                    </li>
                </ul>
            </div>
        </>
    )

};