import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import posed, { PoseGroup } from 'react-pose';
import { useTheme } from '../../hooks';
import { ToggleButton } from '../';
import Paula from '../CVs/Paula';
import Rosario from '../CVs/Rosario';
import List from '../CVs/List';
import Aima from '../../resources/images/aima.png'
import GoBackButton from '../GoBackButton/GoBackButton';
import './App.scss';
import ToggleLanguageButton from '../ToggleLanguageButton/ToggleLanguageButton';

const RouteContainer = posed.div({
    enter: { opacity: 1 },
    exit: { opacity: 0 },
});

type Language = 'es' | 'en'

const App: React.FC = () => {
    const { theme, Themes, toggleTheme } = useTheme();

    const [language, setLanguage] = useState<Language>('en')

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'es' ? 'en' : 'es')
    }

    const isProfilePage = (pathname: string) => {

        return pathname === '/paula' || pathname === '/rosario'
    }
    return (
        <div className={theme === Themes.dark ? 'theme-dark' : 'theme-light'}>
            <Route
                render={({ location }) => {
                    return <div className="container">
                        <span className="notch" />
                        <div className="welcome">
                            <h1 className="title">Aima</h1>
                            <div className="divider">
                                <span className="hr" />
                                <img src={Aima} className='appLogo' alt='logo' />
                            </div>
                            <h4 className='subtitle'>
                                Want to know more <br />
                                about us?
                            </h4>
                            <h6>Click on our summaries!</h6>
                        </div>
                        <PoseGroup>
                            <RouteContainer
                                key={`routerContainer${location.key}`}
                                className="routerContainer">
                                <Switch location={location} key={'switch'}>
                                    <Route
                                        path={`/paula`}
                                        key="paula"
                                    >
                                        <Paula language={language} />
                                    </Route>
                                    <Route
                                        path={`/rosario`}

                                        key="rosario"
                                    >
                                        <Rosario language={language} />
                                    </Route>
                                    <Route component={List} key="default" />
                                </Switch>
                            </RouteContainer>
                        </PoseGroup>
                        <div className="footer">
                            {
                                isProfilePage(location.pathname) &&
                                <ToggleLanguageButton checked={language === 'es'} toggle={toggleLanguage} />
                            }
                            <ToggleButton
                                checked={theme === Themes.light}
                                toggle={toggleTheme}
                                checkedIcon="sun"
                                uncheckedIcon="moon"
                                big
                            />
                            {
                                isProfilePage(location.pathname) &&
                                <GoBackButton />
                            }
                        </div>
                    </div>
                }}
            />
        </div>
    );
};

export default App;
