import React from 'react'
import {shallow} from 'enzyme'
import Headlines from './Headlines'

import{findDataTest} from '../../../utils/utils'

const setUp = (props={})=>{
    const component = shallow(<Headlines {...props}/>)
    return component
}
describe('Headlines component', () => {
    describe('with props',()=>{
        let wrapper
        beforeEach(()=>{
            const props = {
                header:'TEST',
                desc:'some tests'
            }
            wrapper = setUp(props)
        })
        it('should render without errors',()=>{
            const component = findDataTest(wrapper,"headcomp")
            expect(component.length).toBe(1)
        })
    })
    describe('without props',()=>{
        let wrapper
        beforeEach(()=>{
            wrapper = setUp()
        })
         it('should render without errors',()=>{
            const component = findDataTest(wrapper,'headcomp')
            expect(component.length).toBe(0)
        })
    })
});