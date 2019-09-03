import React, { Component } from "react";
import { StyleSheet, Modal, View, ActivityIndicator } from "react-native";
import PropTypes from "prop-types";

import SpinnerManager from "./SpinnerManager";

/**x
 * Simple random ID for internal Spinner component usage
 */
function srid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }

    return `${s4()}-${s4()}-${s4()}`;
}

/**
 * Global function to handle show spinner that can be called anywhere in your app
 *
 * ```
 *  showSpinner()
 * ```
 */
export function showSpinner() {
    const ref = SpinnerManager.getDefault();
    if (!!ref) {
        ref.showSpinner();
    }
}

/**
 * Global function to programmatically hide spinner that can be called anywhere in your app
 *
 * ```
 *  hideSpinner()
 * ```
 */
export function hideSpinner() {
    const ref = SpinnerManager.getDefault();
    if (!!ref) {
        ref.hideSpinner();
    }
}

/**
 * Main component of this package
 * The Spinner component it's a global utility to help you with easily and highly customizable Spinner,
 * To global use, please add your <Spinner /> as a last component in your root main screen
 *
 * ```
 *   <View style={{ flex: 1 }}>
 *     <YourMainApp />
 *     <Spinner />   <--- here as last component
 *   <View>
 * ```
 */
export default class Spinner extends Component {
    static defaultProps = {
        /**
         * Use to handle if the instance can be registed as default/global instance
         */
        canRegisterAsDefault: true,
        color: ""
    };
    static propTypes = {
        canRegisterAsDefault: PropTypes.bool,
        color: PropTypes.string
    };
    state = {
        isShowing: false
    };
    constructor(props) {
        super(props);

        if (!this._id) this._id = srid();
    }
    componentDidMount() {
        if (this.props.canRegisterAsDefault) {
            SpinnerManager.register(this);
        }
    }
    componentWillUnmount() {
        if (this.props.canRegisterAsDefault) {
            SpinnerManager.unregister(this);
        }
    }

    /**
     * Instace ref function to handle show spinner
     *
     * ```
     * this.refs.YOUR_REF.showSpinner()
     * ```
     */
    showSpinner() {
        this.setState({ isShowing: true });
    }
    /**
     * Instace ref function to programmatically hide spinner
     *
     * ```
     * this.refs.YOUR_REF.hideSpinner()
     * ```
     */
    hideSpinner() {
        this.setState({ isShowing: false });
    }
    render() {
        return (
            <Modal
                onRequestClose={() => console.log("spinner closed")}
                animationType="none"
                supportedOrientations={["landscape", "portrait"]}
                transparent
                visible={this.state.isShowing}
            >
                <View
                    style={[
                        styles.container,
                        { backgroundColor: "rgba(0, 0, 0, 0.25)" }
                    ]}
                    key={`spinner_${Date.now()}`}
                >
                    <View style={styles.background}>
                        <ActivityIndicator
                            size="large"
                            color={this.props.color}
                        />
                    </View>
                </View>
            </Modal>
        );
    }
    _id;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    background: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    spinner: {
        position: "relative",
        justifyContent: "center",
        alignItems: "center"
    },
    textContainer: {
        flex: 1,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute"
    },
    textContent: {
        top: 80,
        height: 50,
        fontSize: 20,
        fontWeight: "bold"
    }
});
