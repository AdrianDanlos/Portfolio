export default {
    methods: {
        openResume() {
            // window.open(
            //   "https://drive.google.com/file/d/1kyuOcjPTBD9pDbegQEvu7yvTCcH6p2wE/view?usp=sharing",
            //   "_blank"
            // );

            let link = document.createElement("a");
            link.href = 'Adrian.pdf';
            link.download = "Adrian_Danlos.pdf";
            link.dispatchEvent(new MouseEvent("click"));
        }
    },
}