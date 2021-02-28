export default () => {

    const texts = [
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores soluta error laboriosam repudiandae odit expedita cumque nemo ipsum libero unde ducimus deleniti fugit cum, necessitatibus, maxime qui! Voluptatibus, non! Maiores?",

        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum ipsa quidem quasi sit! Quae consequuntur blanditiis necessitatibus exercitationem inventore id recusandae atque soluta quas! A ratione exercitationem tempora delectus accusantium?",

        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque amet sint ea exercitationem commodi! Nobis dolores magnam eius, iste culpa non fuga repellendus sint? Culpa porro maxime id debitis quos!"
    ];

    return texts[Math.floor(Math.random()*texts.length)]
}