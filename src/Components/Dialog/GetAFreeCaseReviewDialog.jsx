

const GetAFreeCaseReviewDialog = () => {
    return (
        <div style={{ width: "100%", position: "relative", borderRadius: "18px", height: "640px", overflow: "hidden", backgroundImage: "url('get a free case review.png')", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "top", textAlign: "center", fontSize: "28px", color: "#f9f9f9", fontFamily: "Poppins", }}>
            <b style={{ position: "absolute", top: "31px", left: "calc(50% - 108px)", textAlign: "left", }}>Case received!</b>
            <div style={{ position: "absolute", top: "87px", left: "calc(50% - 192px)", fontSize: "16px", color: "rgba(191, 205, 229, 0.7)", display: "inline-block", width: "383px", }}>Your case is in good hands. An attorney will connect with you shortly.</div>
            <div style={{ position: "absolute", top: "532px", left: "2px", backgroundColor: "rgba(112, 150, 209, 0.22)", width: "488px", height: "108px", }} />
            <div style={{ position: "absolute", top: "565px", left: "calc(50% - 209px)", display: "inline-block", width: "419px", fontSize: "14px", }}>
                <span>We've got your case! Your reference number is</span>
                <span style={{ fontSize: "16px", fontWeight: "600", color: "#f8d216", }}>
                    <span style={{ color: "#fff", }}>{` `}</span>
                    <span>#9328876</span>
                </span>
                <span>—let us know if you need anything.</span>
            </div>
            <img style={{ position: "absolute", top: "165px", left: "0px", width: "490px", height: "3px", objectFit: "contain", }} alt="" src="Line 229.svg" />
            <img style={{ position: "absolute", top: "7px", left: "455px", width: "24px", height: "24px", overflow: "hidden", }} alt="" src="Frame.svg" />
            <img style={{ position: "absolute", top: "7px", left: "424px", width: "24px", height: "24px", overflow: "hidden", }} alt="" src="Frame.svg" />
        </div>);
};

export default GetAFreeCaseReviewDialog;
