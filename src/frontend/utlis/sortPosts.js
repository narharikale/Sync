const sortPosts = (sortBy, allPosts) => {
	switch (sortBy) {
		case "newest":
			return [...allPosts].sort(
				(a, b) => new Date(b.createdAt) - new Date(a.createdAt)
			);
		case "trending":
			return [...allPosts].sort((a, b) => b.likes.likeCount - a.likes.likeCount);
		default:
			return allPosts;
	}
};

export { sortPosts };