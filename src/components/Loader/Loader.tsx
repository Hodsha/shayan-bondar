import './loader.scss';

export default function Loader() {
    return (
        <div className="loader_container">
            <div className="loader">
                <div data-glitch="Loading..." className="glitch">Loading...</div>
            </div>

        </div>
    )
}
