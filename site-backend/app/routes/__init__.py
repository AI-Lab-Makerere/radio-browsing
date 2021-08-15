from flask_restful import Api
from app.controllers import ( IndexView, TagView, TagSearchView, TopicSearchView, AudioView, CommentView, UserView, AudioTagView, TopicView)

api = Api()

# Index route
api.add_resource(IndexView, '/')
# Search_via_tag route
api.add_resource(TagSearchView, '/search_tag', endpoint='bytag')
# Search_via_topic route
api.add_resource(TopicSearchView, '/search_topic', endpoint='bytopic')
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
api.add_resource(TopicView, '/search/topics', endpoint='topic')
