import React from 'react';
import { useParams, Navigate } from 'react-router-dom'

const generatePage = page => {
    const component = () => require(`../../pages/${page}`).default
    try {
        return React.createElement(component())
    } catch (err) {
        return React.createElement(() => <Navigate to="/404" />)
    }
}

export default function PageRenderer() {
    const { page } = useParams()

    return generatePage(page)
}