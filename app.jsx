// Main prototype app — hash router for the personal site.

const ACCENT = "#0c0d10";       // ink
const ACCENT_SOFT = "#e2d2ae";  // sand highlighter
const ML_HIGHLIGHT_STYLE = "serif";

function useHashRoute(defaultRoute = "home") {
  const get = () => (window.location.hash || `#${defaultRoute}`).replace(/^#/, "");
  const [route, setRoute] = React.useState(get);
  React.useEffect(() => {
    const onHash = () => {
      setRoute(get());
      window.scrollTo({ top: 0, behavior: "instant" });
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  return route;
}

function App() {
  const route = useHashRoute("home");

  React.useEffect(() => {
    document.documentElement.style.setProperty("--c-accent", ACCENT);
    document.documentElement.style.setProperty("--c-accent-soft", ACCENT_SOFT);
  }, []);

  const tweaks = { mlStyle: ML_HIGHLIGHT_STYLE };

  const page = ({
    home: <DirC_Home tweaks={tweaks} />,
    resume: <DirC_Resume tweaks={tweaks} />,
    publications: <DirC_Publications tweaks={tweaks} />,
  })[route] || <DirC_Home tweaks={tweaks} />;

  return (
    <div key={route} className="page-fade">
      {page}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
