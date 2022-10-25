import { useSelector } from "react-redux";
import { State } from "store/reducer";
import "stylesheets/Footer.scss";


export default function Footer() {
    const { timerId } = useSelector((state: State) => state.time);

    return (
        <div className={`bottom-area ${timerId ? "hidden" : ""}`}>
            <span className="hint">
                <kbd>Tab</kbd> to start over
            </span>
            <footer>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/Arnish-B/typo">
                    <span>&lt;/&gt;</span> github
                </a>
                <span>
                    created by{" "}
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/Arnish-B">
                        @Arnish-B
                    </a>
                </span>
            </footer>
        </div>
    );
}
