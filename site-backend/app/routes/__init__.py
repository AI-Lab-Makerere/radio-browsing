from flask_restful import Api
from app.controllers import ( IndexView, TagView, SearchView, AudioView, CommentView, UserView, AudioTagView, TopicView)

api = Api()

# Index route
api.add_resource(IndexView, '/')
# Search route
api.add_resource(SearchView, '/search_tag', endpoint='info')
# New tags route
api.add_resource(TagView, '/search/tags', endpoint='tag')
# Audios route
api.add_resource(AudioView, '/search/audios', endpoint='audios')
# Comments route
api.add_resource(CommentView, '/search/reviews', endpoint='reviews')
# Users route
api.add_resource(UserView, '/users', endpoint='users')
# Audio-Tag route
api.add_resource(AudioTagView, '/search', endpoint='search')
#Topics route
api.add_resource(TopicView, '/topics', endpoint='topic')
