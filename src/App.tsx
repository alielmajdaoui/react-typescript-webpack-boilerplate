import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { actions, signIn, signInRTK } from './user/user-reducer';
import { useAppDispatch, useAppSelector } from './app/store';

const App = () => {
    const state = useAppSelector((state) => state);
    const dispatch = useAppDispatch();

    const handleSignIn = useCallback(() => {
        dispatch(signIn()).then((message) => console.log(message));
    }, [dispatch]);

    const handleSignInRTK = useCallback(async () => {
        const result = await dispatch(signInRTK(123));

        if (signInRTK.fulfilled.match(result)) {
            console.log(result.payload);
        }
    }, [dispatch]);

    const handleSignOut = useCallback(() => {
        dispatch(actions.signOut());
    }, [dispatch]);

    return (
        <div>
            <div>Hello World!</div>
            <div>
                <Link to="/info">Go to Info page!</Link>
            </div>
            <div>
                <h1>Dummy Authentication to Test Redux</h1>
                {state.isAuthenticated ? (
                    <div>
                        <div>Hello dear!</div>

                        <button onClick={handleSignOut}>Sign Out</button>
                    </div>
                ) : (
                    <div>
                        <button onClick={handleSignIn}>Sign In</button> -
                        <button onClick={handleSignInRTK}>
                            Sign In (Redux Toolkit)
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default App;
