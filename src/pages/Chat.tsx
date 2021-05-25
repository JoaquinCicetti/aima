import React from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import './styles.scss';

const Chat: React.FC = () => {

    const location = useLocation();
    return location && (location.pathname === `/chat` || location.pathname === `/`) ? (
        <div className="chat">
            <div className="intro">
                <p>
                    Hi! <span className="name">{'user'}</span>
                </p>
            </div>


        </div>
    ) : (
        <Redirect
            to={{
                pathname: `/info`,
                state: { from: location },
            }}
        />
    );
};

export default Chat;
