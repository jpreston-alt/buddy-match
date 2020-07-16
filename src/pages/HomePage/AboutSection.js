import React from "react";
import "./style.css"

const styles = {
    container: {
        // paddingTop: 100,
        // paddingBottom: 100,
        // maxWidth: 900
        padding: "10%",
        maxWidth: 900
    },

    header: {
        color: "#2c3e50"
    }
}

function AboutSection() {
    return (
        <div className="uk-container uk-text-justify" style={styles.container}>
            <div className="uk-text-center">
                <h1 style={styles.header}>About</h1>
                <hr className="about-hr" />
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tortor nisl, aliquam sed nisi non, iaculis vehicula odio. Nam fringilla vitae sapien eu luctus. Vivamus lectus tellus, dignissim id lorem at, eleifend imperdiet risus. Vestibulum et est turpis. Integer feugiat sed risus at interdum. Maecenas condimentum, mi interdum mattis iaculis, nisl felis faucibus ipsum, vitae ullamcorper turpis ipsum eget ex. Vivamus ac ante nec turpis tempor consectetur. Nulla quis elit ac velit blandit auctor ut vel sapien. Phasellus maximus felis nec tristique imperdiet. Sed velit mauris, posuere vel dignissim eget, egestas sed erat.
            <br /><br />
                Nulla posuere feugiat fermentum. Mauris mi neque, sollicitudin quis diam a, facilisis blandit elit. Aenean scelerisque auctor dolor quis pulvinar. Fusce malesuada semper pulvinar. Curabitur a fermentum ante. Donec vel hendrerit ligula. Vestibulum ut nisi et mauris varius molestie. Donec in ante velit. Fusce ligula lacus, rhoncus et efficitur et, fringilla ac tellus. Nam quis odio ex. Nulla posuere feugiat fermentum. Mauris mi neque, sollicitudin quis diam a, facilisis blandit elit. Aenean scelerisque auctor dolor quis pulvinar. Fusce malesuada semper pulvinar. Curabitur a fermentum ante. Donec vel hendrerit ligula. Vestibulum ut nisi et mauris varius molestie. Donec in ante velit. Fusce ligula lacus, rhoncus et efficitur et, fringilla ac tellus. Nam quis odio ex.
            <br /><br />
                Suspendisse non velit magna. Proin interdum orci in luctus ultricies. Duis purus dui, aliquet id rhoncus sed, ornare quis leo. Nunc tristique fermentum odio, vitae mollis lorem laoreet sit amet. Aliquam erat volutpat. Cras tempor auctor erat a sagittis. Donec lobortis sem nec sollicitudin sagittis. Maecenas eu purus mi. Cras gravida tellus risus, et porttitor lectus sagittis sed. Quisque quam ante, tempus eget rutrum non, consectetur vitae ante. Donec imperdiet aliquam eros at scelerisque. Nulla rutrum, turpis ultricies efficitur interdum, magna ipsum blandit nibh, in scelerisque nisl nulla in mauris. Phasellus a tortor tellus. Mauris blandit quam non ante posuere, quis rhoncus augue tempus. Pellentesque augue tellus, hendrerit eget ornare et, semper malesuada magna.</p>
        </div>
    )
};

export default AboutSection;