# README

# chat-space DB設計

## users テーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null:false|
|email|string|null:false, unique: true|
|password|string|null: false|

### Association
- has_many :messages
- has_many :groups, through: groups_users
- has_many :groups_users


## messages テーブル
|Column|Type|Options|
|------|----|-------|
|body|text|
|image|string|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group


## groups テーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique: true|

### Association
- has_many: users, through: groups_users
- has_many: messages
- has_many: groups_users


## group_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

