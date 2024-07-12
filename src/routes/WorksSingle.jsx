import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import worksData from '../temp/worksData.json'
import WorksPageAnimWrapper from '../utils/WorksPageAnimWrapper';

const WorksSingle = () => {

    const { slug } = useParams();
    const [work, setWork] = useState({});

    useEffect(() => {
        const filteredWork = worksData.filter(work => work.slug === slug);
        setWork(filteredWork[0])
    }, [slug])

    return (
        <WorksPageAnimWrapper mainColor={work.primaryColor}>
            Hello world
        </WorksPageAnimWrapper>
    )
}

export default WorksSingle