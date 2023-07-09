import React, { useState } from 'react'
import Loader from '../../components/Loader/Loader';

enum GameStatus {
    None,
    Loading,
    Error,
    View,
    NoItems
}
const [status, setStatus] = useState<GameStatus>(GameStatus.Loading);

export default function Game() {
    const [isLoading, setIsLoading] = useState(true);
    if (isLoading) {
        return <Loader />;
    }
    return (
        <div>
            {renderBaseOnStatus()}
        </div>
    )
}


function renderBaseOnStatus(): JSX.Element {
    switch (status) {
        case GameStatus.Loading:
            return renderLoading();
        case GameStatus.Error:
            return renderError();
        case GameStatus.View:
            return renderView();
        default:
            return renderNoItems();
    }
}

function renderLoading(): JSX.Element {
    return <Loader />;
}

function renderNoItems() {
    return <div>No Items</div>;
}

function renderError() {
    return <div>Error</div>
}

function renderView() {
    return <div>View</div>
}


function switchStatus(status: GameStatus): void {

    if (isInStatus(status)) {
        return;
    }
    setStatus(status);
}


function isInStatus(status: GameStatus): boolean {
    return status === status;
}