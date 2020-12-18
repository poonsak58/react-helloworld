import Layout from './layout/layout';
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import moment from 'moment'
import ReactLoading from 'react-loading';

const Users = () => {

    const [news, setNews] = useState({})
    const [loading, setLoading] = useState(false);

    const [type, color] = ['bubbles', '#E8453C']

    useEffect(() => {
        axios({
            method: "GET",
            url: 'http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=572d679d2f2a47ac93ad79de2d65d74d',
        }).then((response) => {
            // console.log(response);
            setLoading(true)
            setNews(response.data)
        })
    }, [])

    return (
        <>
            <Layout title="ข้อมูลผู้ใช้">
                <div className="container">
                    <h1>Users</h1>
                    {/* {JSON.stringify(news)} */}

                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Title</th>
                                <th scope="col">Author</th>
                                <th scope="col">Publish At</th>
                            </tr>
                        </thead>
                        {loading ?
                            <tbody>
                                {news && news.articles && news.articles.map((item, index) => (
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>{item.title}</td>
                                        <td>{item.author}</td>
                                        <td>{moment(item.publishedAt).format("MM/DD/YYYY")}</td>
                                    </tr>
                                ))}
                            </tbody> :
                            <ReactLoading type={type} color={color} height={667} width={375} />
                        }
                    </table>
                </div>
            </Layout>
        </>
    )
}

export default Users