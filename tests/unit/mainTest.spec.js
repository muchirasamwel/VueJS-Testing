import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";
import compute from "@/components/compute.vue";
import nameMaster from "@/components/nameMaster.vue";

describe("HelloWorld.vue", () => {
    it("renders props.msg when passed", () => {
        const msg = "new message";
        const wrapper = shallowMount(HelloWorld, {
            propsData: { msg }
        });
        expect(wrapper.text()).to.include(msg);
    });
});
describe("compute.vue", () => {
    it("adds two numbers 4 and 6 and results = 10", () => {
        const componentCalc = shallowMount(compute, {
            //calc: { 'input1':'4','input2':'4' }
        });
        componentCalc.find('#inp1').setValue(4);
        componentCalc.find('#inp2').setValue(6);
        componentCalc.find('button').trigger('click');

        expect(componentCalc.find('label').text()).to.include("10");
    });
});
describe("Test on compute.vue test with wrong data", () => {
    it("adds a numbers and letter '4' and 'y' = NaN", () => {
        const componentCalc = shallowMount(compute, {
            //calc: { 'input1':'4','input2':'4' }
        });
        componentCalc.setData({calc : { 'input1':'4','input2':'y' }});
        // componentCalc.find('#inp1').setValue(4);
        // componentCalc.find('#inp2').setValue('y');
        componentCalc.find('button').trigger('click');

        expect(componentCalc.find('label').text()).to.include("NaN");
    });
});
describe("Test on nameMaster.vue Combine magic", () => {
    it("combines two names 'sam' and 'kan' to '*sam***kan*'", () => {
        const componentCalc = shallowMount(nameMaster, {

        });
        componentCalc.find('#fname').setValue('sam');
        componentCalc.find('#sname').setValue('kan');
        componentCalc.find('#combinename').trigger('click');

        expect(componentCalc.find('#combinedname').text()).to.equal("*sam***kan*");
    });
});

describe("nameMaster.vue add Trick", () => {
    it("count tricks two names 'sam' and 'kan' to '*3kan*'", () => {
        const componentCalc = shallowMount(nameMaster, {

        });
        componentCalc.find('#fname').setValue('sam');
        componentCalc.find('#sname').setValue('kan');
        componentCalc.find('#countnames').trigger('click');

        expect(componentCalc.find('#namelen').text()).to.equal("*3@kan*");
    });
});