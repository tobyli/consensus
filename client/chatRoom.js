/**
 * Created by MingYang on 8/4/15.
 */


Template.chatrooms.helpers({
    'chatroom': function(PID){
        var currentProject = PID;

        return Chatrooms.find({projectId: currentProject},{sort:{createdAt:1}});
    }
}),



    Template.chatItem.events({
        'click .delete-chatItem': function(event){
            event.preventDefault();
            var documentID = this._id;
            Chatrooms.remove({_id: documentID});
        }

    }),

    Template.newChatItem.helpers({
        'chatroom': function(){
            return Chatrooms.find({projectId: currentProject},{sort:{createdAt:1}});
        }
    }),


    Template.newChatItem.events({
        'submit form': function(event){
            event.preventDefault();

            var chatContent = event.target.newItem.value;
            //console.log(chatContent);
            var currentProject = this.currentProjectt;
            var currentUser = Meteor.userId();
            //var alias = Meteor.users.find({_id: currentUser});
            var names = Meteor.user().username;



            console.log(names);
            Chatrooms.insert({
                content: chatContent,
                createdAt: new Date(),
                user: names,
                tag1: "",
                tag2: "",
                projectId: currentProject,
                createdBy: currentUser
            });
            $('[name = "newItem"]').val('');

        }

    })