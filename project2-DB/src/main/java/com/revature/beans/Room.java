package com.revature.beans;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="room")
public class Room {

	@Id
	@Column(name="id")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	/*
	 * Maps a One-to-many relationship that relies on the 
	 * many-to-one side to propagate all entity state changes
	 */
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "room_type_id")
	private RoomType type;
	
	@OneToMany(mappedBy = "occupied_room",
			cascade = CascadeType.ALL)
	private List<OccupiedRoom> occupiedRooms = new ArrayList<>();
	
	@Column(name="number")
	private int number;
	
	@Column(name="name")
	private String name;
	
	@Column(name="status")
	private String status; // possible enum
	
	@Column(name="smoke")
	private boolean smoke; 
	
//	@Column(name="room_type_id") // might not be needed
//	private int roomTypeId; // possible enum
	
}