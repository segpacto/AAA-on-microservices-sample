import { useEffect, useState } from "react";

import Keycloak from 'keycloak-js';

export const useKeycloak = () => {
    const [keycloak, setKeycloak] = useState(null)
    const [userInfo, setUserInfo] = useState(null)

    useEffect(() => {
        const keycloakClient = Keycloak({
            url: process.env.REACT_APP_AUTH_URL,
            realm: process.env.REACT_APP_AUTH_REALM,
            clientId: process.env.REACT_APP_AUTH_CLIENT_ID
        })

        setKeycloak(keycloakClient)

        const onLoad = process.env.REACT_APP_AUTH_ON_LOAD

        const init = async () => {
            const auth = await keycloakClient.init({ onLoad })
            if (auth) {

                const user = await keycloakClient.loadUserInfo()

                setUserInfo(user)
            }
        }
        init()
    }, [])
    
    return [keycloak, userInfo]
}