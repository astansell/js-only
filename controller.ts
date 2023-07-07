/**
 * Blocks for PLTW Controller
 */
//% weight=100 color=#0000ff icon="\uf11b" block="PLTW Controller v2"
//% groups='["Inputs"]'
namespace PLTW_Controller {
    /**
    * Standard Buttons
    */
    export enum ControllerButtons {
        Up,
        Down,
        Left,
        Right,
        P12,
        P16
    }


    /**
    * Controller Button Pins
    */
    export enum ControllerButtonPins {
        //% block="Down (P8)"
        Down = DAL.MICROBIT_ID_IO_P8,
        //% block="Up (P0)"
        Up = DAL.MICROBIT_ID_IO_P0,
        //% block="P12 (P12)"
        P12 = DAL.MICROBIT_ID_IO_P12,
        //% block="Right (P2)"
        Right = DAL.MICROBIT_ID_IO_P2,
        //% block="Left (P1)"
        Left = DAL.MICROBIT_ID_IO_P1,
        //% block="P16 (P16)"
        P16 = DAL.MICROBIT_ID_IO_P16
    }


    /**
    * Controller Button Events
    */
    export enum ControllerButtonEvents {
        //% block="down"
        Down = DAL.MICROBIT_BUTTON_EVT_DOWN,
        //% block="up"
        Up = DAL.MICROBIT_BUTTON_EVT_UP,
        //% block="click"
        Click = DAL.MICROBIT_BUTTON_EVT_CLICK
    }


    /**
     * Determines if a Controller button is pressed
     * @param button press to be checked
     */
    //% group=Inputs
    //% blockId="PLTW_controller_ispressed" block="button %button|is pressed"
    //% button.fieldEditor="gridpicker" button.fieldOptions.columns=3
    //% weight=95 blockGap=8
    export function buttonIsPressed(button: ControllerButtonPins): boolean {
        const pin = <DigitalPin><number>button;
        pins.setPull(pin, PinPullMode.PullUp);
        return pins.digitalReadPin(pin) == 0;
    }


}



