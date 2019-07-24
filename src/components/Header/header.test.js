import React from 'react'
import {shallow} from 'enzyme'
import Header from './Header'
import {findDataTest} from '../../../utils/utils'
const setUp = (props={})=>{
    const component = shallow(<Header {...props}/>)
    return component     
}
describe('Header component',()=>{
    let comp
    beforeEach(()=>{
        comp = setUp()
    })
    it('should render without errors',()=>{
        const ret = findDataTest(comp,'wrap')
        expect(ret.length).toBe(1)
    })
})