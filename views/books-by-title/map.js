function (doc) {
	if (doc.type == 'book') {
		emit(doc.title, doc);
	}
}
