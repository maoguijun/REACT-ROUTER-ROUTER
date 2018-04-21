/*
 * react中的key，给组件添加唯一的标识符
 * key在其兄弟之间应该是独一无二的，而不是全局
 * 
 * 
 * */

import React, { Component } from "react"; 



function Key(props){
	const posts=props.posts;
	console.log(posts);
	const topBar=(
		<ul>
			{
				posts.map(post=>
					<li key={post.id}>{post.title}</li>
				)
			}
		</ul>
	)
	const content=posts.map(post=>
		<div key={post.id}>
			<h3>{post.title}</h3>
			<h4>{post.content}</h4>
		</div>
	)
	return (
		<div>
			{topBar}
			<hr />
			{content}
		</div>
	)
}

export default Key;
