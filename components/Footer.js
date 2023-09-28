export default function Footer() {
    return (
        <>
            <div className="footer-container p-2 mt-3" style={{ background: "" }}>
                <div className="text-white text-center font-weight-thin">&copy; COPS | NameCards</div>
            </div>
            <style jsx>{`
                .footer-container {
                    background: linear-gradient(to right, #0c253a, #0c363a);
                }
            `}</style>
        </>
    );
}
